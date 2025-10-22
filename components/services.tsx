import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hammer, Building2, Truck, HardHat, Wrench, Home } from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Structural Demolition",
    description:
      "Complete building demolition with precision and safety. We handle residential, commercial, and industrial structures.",
  },
  {
    icon: Building2,
    title: "Interior Demolition",
    description:
      "Selective interior demolition for renovations and remodels. Careful removal while preserving structural integrity.",
  },
  {
    icon: Truck,
    title: "Debris Hauling",
    description: "Professional debris removal and hauling services for demolition and construction projects.",
  },
  {
    icon: HardHat,
    title: "Concrete Removal",
    description: "Expert concrete breaking, removal, and disposal. Driveways, foundations, slabs, and more.",
  },
  {
    icon: Wrench,
    title: "Excavation Services",
    description: "Professional excavation for foundations, utilities, and landscaping projects.",
  },
  {
    icon: Home,
    title: "Residential Services",
    description: "Specialized residential demolition and contracting for homeowners and developers.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive demolition and contracting solutions tailored to your project needs. From small residential
            jobs to large commercial projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
