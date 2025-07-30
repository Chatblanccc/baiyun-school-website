"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Testimonial = {
  name: string
  role: "学生" | "家长"
  quote: string
  avatarUrl: string
}

interface ScrollingTestimonialsProps {
  testimonials: Testimonial[]
}

export default function ScrollingTestimonials({ testimonials }: ScrollingTestimonialsProps) {
  return (
    <div
      className="relative w-full overflow-hidden py-12"
      style={{
        maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <div className="flex min-w-full shrink-0 animate-scroll [animation-play-state:running] hover:[animation-play-state:paused]">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <Card key={index} className="w-[350px] shrink-0 mx-4 md:w-[450px]">
            <CardContent className="p-6 flex flex-col items-start text-left h-full">
              <blockquote className="flex-grow text-lg font-medium text-foreground">
                {`"${testimonial.quote}"`}
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatarUrl || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
