"use client";

import React from "react";
import { StatCard } from "./StatCard"; 
// ...existing code...
import { SkillBar } from "./SkillBar";
// ...existing code...

const skills = [
  { skill: "React", percentage: 95 },
  { skill: "TypeScript", percentage: 90 },
  { skill: "Python", percentage: 80 },
  { skill: "Next.js", percentage: 88 },
  { skill: "AWS", percentage: 75 },
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Technologies" },
];

export function About() {
  return (
    <div id="about" className="max-w-6xl mx-auto px-6 py-16 bg-gray-200">
      {/* Header Section */}
      <div className="text-center mb-16 animate-fade-up ">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Passionate developer with 5+ years of experience building scalable
          applications
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Journey Section */}
        <div className="animate-slide-up">
          <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I&apos;m a passionate full-stack developer with expertise in modern web
              technologies. I love creating efficient, scalable solutions that
              solve real-world problems.
            </p>
            <p>
              With a strong foundation in React, TypeScript, and cloud
              technologies, I&apos;ve successfully delivered 50+ projects ranging
              from startups to enterprise applications.
            </p>
            <p>
              When I&apos;m not coding, you will find me contributing to open-source
              projects, writing technical articles, or exploring the latest in
              web development.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="animate-slide-up">
          <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
          <div className="space-y-4">
            {skills.map((skillData, index) => (
              <SkillBar
                key={index}
                skill={skillData.skill}
                percentage={skillData.percentage}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up">
        {stats.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  );
}
