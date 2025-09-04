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
}