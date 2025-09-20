import { Mail, Phone, MapPin } from "lucide-react"
import ContatItem from "./ContatItem"

interface ContatInfoProps {
  email?: string
  phone?: string
  location?: string
  experience?: string[]
}

export function ContatInfo({
  email = "anthonygodswill75@gmail.com",
  phone = "07041488229",
  location = "Woji Townhall, Nigeria",
  experience = [
    "5+ years of professional experience",
    "Fast turnaround and reliable delivery",
    "Modern, scalable solutions",
    "Ongoing support and maintenance",
  ],
}: ContatInfoProps) {
  return (
    <div id="contact" className="animate-slide-up">
      <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
      
      <div className="space-y-6">
        <ContatItem icon={Mail} title="Email" value={email} />
        <ContatItem icon={Phone} title="Phone" value={phone} />
        <ContatItem icon={MapPin} title="Location" value={location} />
      </div>

      <div className="mt-8">
        <h4 className="font-semibold mb-4">Why Choose Me?</h4>
        <ul className="space-y-2 text-muted-foreground">
          {experience.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

