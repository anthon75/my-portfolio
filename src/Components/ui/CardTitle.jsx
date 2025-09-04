
// Card title text
// export function CardTitle({ children, className = "" }) {
//   return (
//     <h3 className={`text-lg font-semibold ${className}`}>
//       {children}
//     </h3>
//   );
// }



import React from "react";
import { cn } from "src/lib/utils";

// Reusable CardTitle component
export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)}>
      {children}
    </h3>
  );
}