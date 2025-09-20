"use client";

import React, { useState } from "react";
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

  return (
    <Card className=" border border-border">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First + Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              id="firstName"
              name="firstName"
              label="First Name"
              placeholder="John"
              className="bg-background border-input"
              required
            />

            <Input
              id="lastName"
              name="lastName"
              label="Last Name"
              placeholder="Doe"
              className="bg-background border-input"
              required
            />
          </div>

          {/* Email */}
          <Input
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="john@example.com"
            className="bg-background border-input"
            required
          />

          {/* Subject */}
          <Input
            id="subject"
            name="subject"
            label="Subject"
            placeholder="Project Discussion"
            className="bg-background border-input"
            required
          />

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              Message
            </Label>
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
            size="lg"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
