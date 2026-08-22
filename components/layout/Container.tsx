import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
