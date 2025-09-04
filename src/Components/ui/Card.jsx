"use client";

import React from "react";

// Main Card wrapper
export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border shadow-sm bg-white ${className}`}>
      {children}
    </div>
  );
}
