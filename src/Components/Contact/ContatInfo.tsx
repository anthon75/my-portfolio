import { Mail, Phone, MapPin } from "lucide-react"
import ContatItem from "./ContatItem"

interface ContactInfoProps {
  email: String,
  phone: String,
  location: String,
  experience: string,
}

export function ContatInfo({
  email = "your.email@example.com",
  phone = "+1 (555) 123-4567",
  location = "Your City, Country",
  experience = [
    "5+ years of professional experience",
    "Fast turnaround and reliable delivery",
    "Modern, scalable solutions",
    "Ongoing support and maintenance",
  ],
}) {
  return (
    <div className="animate-slide-up">
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
