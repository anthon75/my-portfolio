import React from 'react'


interface SkillBarProps {
  skill: string
  percentage: number
}

export function SkillBar({ skill, percentage }: SkillBarProps) {
  return (
    <div className='bg-gray-200'>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-sm font-medium text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="hero-gradient bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
