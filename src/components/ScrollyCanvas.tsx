"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 192; // 0 to 191

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLDivElement>,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const indexStr = i.toString().padStart(3, '0');
      img.src = `/frames/frame_${indexStr}_delay-0.041s.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages([...loadedImages]);
          console.log("All canvas frames loaded successfully.");
        }
      };
      img.onerror = () => {
        console.error(`Failed to load frame: /frames/frame_${indexStr}_delay-0.041s.png`);
      };
      loadedImages.push(img);
    }
  }, []);

  const drawImage = (index: number) => {
    if (images.length === 0 || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img) return;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let renderWidth, renderHeight, x = 0, y = 0;
    
    if (canvasRatio > imgRatio) {
      renderWidth = canvas.width;
      renderHeight = canvas.width / imgRatio;
      y = (canvas.height - renderHeight) / 2;
    } else {
      renderHeight = canvas.height;
      renderWidth = canvas.height * imgRatio;
      x = (canvas.width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, renderWidth, renderHeight);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length > 0) {
      drawImage(Math.round(latest));
    }
  });

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;
    
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        
        const ctx = canvas.getContext("2d");
        if (ctx) {
           ctx.scale(dpr, dpr);
        }

        const tempWidth = canvas.width;
        const tempHeight = canvas.height;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawImage(Math.round(frameIndex.get()));
        canvas.width = tempWidth;
        canvas.height = tempHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {images.length < FRAME_COUNT && (
          <div className="absolute inset-0 z-20 flex flex-col gap-4 items-center justify-center bg-[#121212] text-white">
             <div className="w-10 h-10 border-4 border-neutral-700 border-t-white rounded-full animate-spin" />
            <span className="text-sm tracking-widest uppercase text-neutral-400">Loading assets...</span>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block z-0"
        />
        <Overlay containerRef={containerRef} />
      </div>
    </div>
  );
}
