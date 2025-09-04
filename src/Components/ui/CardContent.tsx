'use client';

import React from "react";

interface CardContentProps {
  className?: string;
  children?: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return <div className={className}>{children}</div>;
}