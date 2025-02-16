"use client";

import { cubicBezier, motion } from "framer-motion";
import Link from "next/link";
import { Card1, Card2, Card3 } from "@/components/sections/tools";

export default function Home() {
  return (
    <div className="lg:h-[calc(100dvh-56px)] w-full max-w-screen-lg mx-auto flex items-center justify-center">
      <div className="grid lg:grid-cols-3 rounded-xl border w-full">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}
