import React from "react";

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className=" text-center shadow-lg p-6 bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}