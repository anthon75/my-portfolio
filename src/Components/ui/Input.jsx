"use client";

import React from "react";
import { Label } from "../ui/Label";

export function Input({
  id,
  name,
  label,
  type = "text",
  placeholder = "",
  required = false,
  className = "",
  ...props
}) {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {label && <Label htmlFor={id || name}>{label}</Label>}
      <input
        id={id || name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
    </div>
  );
}

