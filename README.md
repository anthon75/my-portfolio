This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from 'lucide-react'
import { Button } from "@/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/Card"
import { Badge } from "@/ui/Badge"


/**
 * @typedef {Object} ProjectCardProps
 * @property {import("../types/project").Project} project
 * @property {number} index
 */

// export function ProjectCard({ project, index }) {
//   return (
//     <Card 
//       className="group hover:scale-105 transition-all duration-300 overflow-hidden animate-slide-up"
//       style={{ animationDelay: `${index * 0.1}s` }}
//     >
//       <div className="relative overflow-hidden">
//         <Image
//           src={project.image || "/placeholder.svg"}
//           alt={project.title}
//           width={600}
//           height={400}
//           className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//         />
//         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//           <div className="flex gap-2">
//             {project.liveUrl && (
//               <Button asChild variant="secondary" size="sm">
//                 <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                   <ExternalLink className="w-4 h-4 mr-1" />
//                   Live
//                 </Link>
//               </Button>
//             )}
//             {project.codeUrl && (
//               <Button asChild variant="secondary" size="sm">
//                 <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
//                   <Github className="w-4 h-4 mr-1" />
//                   Code
//                 </Link>
//               </Button>
//             )}
//           </div>
//         </div>
//       </div>
      
//       <CardHeader>
//         <CardTitle className="text-xl">{project.title}</CardTitle>
//         <CardDescription>{project.description}</CardDescription>
//       </CardHeader>
      
//       <CardContent>
//         <div className="flex flex-wrap gap-2">
//           {project.technologies.map((tech) => (
//             <Badge key={tech} variant="secondary" className="text-xs">
//               {tech}
//             </Badge>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }


export function projectCard({ project }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-xl font-bold mt-4">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        {project.technologies.map((tech, i) => (
          <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">{tech}</span>
        ))}
      </div>
    </div>
  );
}

  const defaultProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind CSS.",
      image: "/images/Screenshot-2025-04-30-020624.png",
      technologies: ["Next.js", "Tailwind CSS", "React"],
      liveUrl: "https://your-portfolio.com",
      codeUrl: "https://github.com/your-username/your-repo",
    },
  ]



'use client'

import { FC, ReactNode } from 'react'
import clsx from 'clsx'

interface BadgeProps {
  children: ReactNode
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'gray'
}

export const Badge: FC<BadgeProps> = ({ children, color = 'blue' }) => {
  const baseStyles =
    'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium'

  const colorStyles = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    gray: 'bg-gray-100 text-gray-800',
  }

  return (
    <span className={clsx(baseStyles, colorStyles[color])}>
      {children}
    </span>
  )
}n


"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"; // utility for merging class names

const ButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(ButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
Button.displayName = "Button";
export default Button;

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



// Card title text
export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`text-lg font-semibold ${className}`}>
      {children}
    </h3>
  );
}



'use client';
import react from 'react';
import { cn } from '@/Lib/utils'; // Assuming you have a utility function for class names
import { ButtonHTMLAttributes } from 'react';


// Card content section
export function CardContent({  className = "" }) {
  return (
    <div className={`px-4 py-3 ${className}`}>
    </div>
  );
}

import React from "react";
import { cn } from "@/Lib/utils"; // utility for merging class names

// Reusable CardHeader component
export function CardHeader({ children, className = "" }) {
  return (
    <div className={cn("px-4 py-3 border-b", className)}>
      {children}
    </div>
  );
}


import React from "react";
import { cn } from "@/Lib/utils"; // utility for merging class names

// Reusable CardTitle component
export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)}>
      {children}
    </h3>
  );
}



import React from "react";
import { Input } from "@/components/ui/ui/Input";
import { Label } from "@/components/ui/ui/label";

export default function InputField({
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
      <Input
        id={id || name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  );
}
"use client";

import React from "react";

export function Label({ children, htmlFor, className = "" }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}
    >
      {children}
    </label>
  );
}

"use client";

import React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${className}`}
      {...props}
    />
  );
}

'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevents hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 transition-all duration-300 hover:scale-110 relative"
      aria-label="Toggle Theme"
    >
      {/* Sun icon for light mode */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      
      {/* Moon icon for dark mode */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      
      {/* Screen reader accessibility */}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
