import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AANKH — Garv Chouhan",
  description: "An ML-enabled E-Beat Management System for Gujarat Police. 1st Prize Winner at Azadi Ka Amrit Mahotsav Hackathon.",
};

export default function AankhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
