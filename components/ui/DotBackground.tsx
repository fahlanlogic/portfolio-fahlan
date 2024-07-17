import React from "react";

export function DotBackgroundDemo({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="absolute top-0 sm:px-10 px-5 h-full w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {children}
    </div>
  );
}
