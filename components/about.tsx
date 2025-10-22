import { CheckCircle2 } from "lucide-react"

const features = [
  "Fully licensed and insured",
  "OSHA certified safety protocols",
  "Modern equipment and technology",
  "Environmental compliance",
  "Competitive pricing",
  "Free project estimates",
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Built on Experience, Driven by Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              McGhee Demolition & Contracting has been serving the community for over 15 years. We specialize in safe,
              efficient demolition and site preparation services for projects of all sizes.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of experienced professionals uses state-of-the-art equipment and follows strict safety protocols
              to ensure every project is completed on time, within budget, and to the highest standards.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
              <img
                src="/demolition-excavator-at-construction-site.jpg"
                alt="Demolition equipment at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
