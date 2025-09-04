import React from "react";
import { cn } from "src/lib/utils";

// Reusable CardHeader component
export function CardHeader({ children, className = "" }) {
  return (
    <div className={cn("px-4 py-3 border-b", className)}>
      {children}
    </div>
  );
}