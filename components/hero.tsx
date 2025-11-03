import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">Licensed & Insured</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Professional Demolition & Contracting Services
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Expert demolition, debris hauling, and contracting services for residential and commercial projects.
            Safety-focused, efficient, and reliable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base bg-transparent">
              <Link href="tel:+17322422770">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Safety Record</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
