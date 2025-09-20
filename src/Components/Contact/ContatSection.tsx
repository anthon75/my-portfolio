"use client"


import { ContatInfo } from "./ContatInfo"
import {ContatForm} from './ContatForm'
import React from "react"


interface ContatSectionProps {
  
  
  email?: string
  phone?: string
  location?: string
  experience?: string[]
  
}

function ContatSection({
  
  
  email,
  phone,
  location,
  experience,
  
}: ContatSectionProps) {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* <SectionHeader title={title} description={description} /> */}

      <div className="grid md:grid-cols-2 gap-12">
        <ContatInfo email={email} phone={phone} location={location} experience={experience} />
        <ContatForm />
      </div>
    </div>
  )
}

export default ContatSection
