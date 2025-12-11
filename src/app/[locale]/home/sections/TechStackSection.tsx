"use client";

import React, { useState } from "react";
import { TechStackSection as TechStackSectionType } from "./data/types/home-types";

interface TechStackSectionProps {
  title: string;
  description: string;
  stacks: TechStackSectionType["stacks"];
}

function StackBubble({ stack }: { stack: TechStackSectionType["stacks"][0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group w-40 h-40 flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Bubble */}
      <div className={`relative z-20 w-full h-full rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shadow-2xl shadow-black/50 transition-all duration-500 ${isHovered ? 'scale-110 border-blue-500/30 shadow-blue-500/20' : ''}`}>
        <div className="text-center">
          <span className="block text-2xl font-bold text-white mb-1">
            {stack.category}
          </span>
          <span className="text-xs text-zinc-500 uppercase tracking-wider">
            Stack
          </span>
        </div>
      </div>

      {/* Chips */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {stack.items.map((item, index) => {
          const totalItems = stack.items.length;
          const angleStep = 260 / totalItems;
          const angle = index * angleStep - 10; // Start from top
          const radian = (angle * Math.PI) / 180;

          // Radii
          const initialRadius = 65; // Barely visible
          const expandedRadius = 150; // Move out

          const x = Math.cos(radian) * expandedRadius;
          const y = Math.sin(radian) * expandedRadius;

          const initialX = Math.cos(radian) * initialRadius;
          const initialY = Math.sin(radian) * initialRadius;

          return (
            <div
              key={item}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)"
              style={{
                transform: isHovered
                  ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  : `translate(calc(-40% + ${initialX}px), calc(-20% + ${initialY}px))`,
                opacity: 1,
                scale: isHovered ? 1 : 0.8,
                transitionDelay: `${index * 30}ms`,
              }}
            >
              <div className="px-4 py-2 rounded-full bg-zinc-900/90 border border-white/10 text-sm text-zinc-300 whitespace-nowrap shadow-xl backdrop-blur-md">
                {item}
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative background glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl -z-10 transition-colors duration-500 ${isHovered ? 'bg-blue-500/30' : ''}`}></div>
    </div>
  );
}

export default function TechStackSection({
  title,
  description,
  stacks,
}: TechStackSectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-white/60">
            {title}
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-32 md:gap-48">
          {stacks.map((stack) => (
            <StackBubble key={stack.category} stack={stack} />
          ))}
        </div>
      </div>
    </section>
  );
}
