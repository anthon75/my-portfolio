"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Sun } from "lucide-react"
import { Card } from "../ui/Card";
import { CardHeader } from "../ui/CardHeader";
import { CardTitle } from "../ui/CardTitle";
import { CardContent } from "../ui/CardContent";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";


export function ContatForm({ title = "Send a Message" }: { title?: string }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataObj: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      formDataObj[key] = String(value);
    }
    console.log("Form submitted:", formDataObj); // ✅ debug output
  };

  const handleVoiceTranscript = (transcript: string) => {
    setMessage(prev => prev + (prev ? " " : "") + transcript);
  };

  return (
    <div id="contact" className="min-h-screen bg-background shadow-2xl border-solid">
      {/* Header */}
      <header className="border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-purple-600">Portfolio</h1>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-purple-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-purple-600 transition-colors">
              About
            </a>
            <a href="#" className="text-foreground hover:text-purple-600 transition-colors">
              Projects
            </a>
            <a href="#" className="text-foreground hover:text-purple-600 transition-colors">
              Contact
            </a>
          </nav>

          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Sun className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>

            <div className="space-y-6">
              {/* Email Contact - EMAIL ICON LOCATION */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">your.email@example.com</p>
                </div>
              </div>

              {/* Phone Contact */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Location Contact - LOCATION ICON LOCATION */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Your City, Country</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-semibold text-foreground">Why Choose Me?</h4>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First + Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        className="bg-background border-input"
                        required label={undefined}                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        className="bg-background border-input"
                        required label={undefined}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background border-input"
                      required label={undefined}
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Discussion"
                      className="bg-background border-input"
                      required label={undefined}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="message" className="text-foreground">
                        Message
                      </Label>
                      
                    </div>
                    <Textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-background border-input resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300"
                    size="lg" variant={undefined}                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )}