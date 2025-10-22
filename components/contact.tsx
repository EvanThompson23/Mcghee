import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to start your project? Contact us today. We respond to all inquiries within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-card border-border hover:border-primary transition-colors">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-card-foreground">Phone</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <a
                href="tel:+17322422270"
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors block"
              >
                (732) 242-2270
              </a>
              <p className="text-sm text-muted-foreground mt-2">Call us anytime</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary transition-colors">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-card-foreground">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <a
                href="mailto:mcgheecontracting@yahoo.com"
                className="text-lg font-semibold text-foreground hover:text-primary transition-colors block"
              >
                mcgheecontracting
                <br />
                @yahoo.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">We'll respond quickly</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary transition-colors">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-card-foreground">Location</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold text-foreground">Oceanport, NJ</p>
              <p className="text-sm text-muted-foreground mt-2">Serving all surrounding regions</p>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground border-primary">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">Emergency</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold mb-2">24/7 Available</p>
              <Button variant="secondary" size="lg" className="w-full" asChild>
                <a href="tel:+17328592194">Call Now</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
