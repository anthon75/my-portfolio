import React from 'react'
import type { LucideIcon } from "lucide-react"

interface ContatItemProps {
  icon: LucideIcon
  title: string
  value: string
}


const ContatItem = ({ icon: Icon, title, value }: ContatItemProps) => {
  return (
    <div>
         <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
    </div>
  )
}

export default ContatItem    
