"use client"


import { ContatInfo } from "./ContatInfo"
import {ContatForm} from './ContatForm'
import React from "react"


interface ContatSectionProps {
  title?: string
  description?: string
  email?: string
  phone?: string
  location?: string
  experience?: string[]
  onFormSubmit?: (data: FormData | Record<string, string>) => void
}

function ContatSection({
  title = "Let's Work Together",
  description = "Ready to bring your ideas to life? Let's discuss your next project",
  email,
  phone,
  location,
  experience,
  onFormSubmit,
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
