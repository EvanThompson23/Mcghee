"use client"

import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

interface InstagramPost {
  id: string
  image: string
  alt: string
  permalink: string
}

export function InstagramSection() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/instagram")
        const data = await response.json()

        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts)
        } else {
          // Fallback to placeholder posts if API fails or not configured
          setPosts(fallbackPosts)
        }
      } catch (error) {
        console.error("Failed to fetch Instagram posts:", error)
        setPosts(fallbackPosts)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const fallbackPosts: InstagramPost[] = [
    {
      id: "1",
      image: "/demolition-excavator-working-on-site.jpg",
      alt: "Demolition project in progress",
      permalink: "https://instagram.com/mcgheecontracting",
    },
    {
      id: "2",
      image: "/construction-equipment-at-work-site.jpg",
      alt: "Heavy equipment at work",
      permalink: "https://instagram.com/mcgheecontracting",
    },
    {
      id: "3",
      image: "/completed-demolition-site-cleared.jpg",
      alt: "Completed demolition project",
      permalink: "https://instagram.com/mcgheecontracting",
    },
    {
      id: "4",
      image: "/construction-crew-working-together.jpg",
      alt: "Our professional team",
      permalink: "https://instagram.com/mcgheecontracting",
    },
    {
      id: "5",
      image: "/demolition-safety-equipment-and-gear.jpg",
      alt: "Safety first approach",
      permalink: "https://instagram.com/mcgheecontracting",
    },
    {
      id: "6",
      image: "/before-and-after-demolition-project.jpg",
      alt: "Project transformation",
      permalink: "https://instagram.com/mcgheecontracting",
    },
  ]

  return (
    <section id="instagram" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Follow Our Work</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            See our latest projects and behind-the-scenes content on Instagram
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {loading
            ? // Loading skeleton
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-lg bg-muted animate-pulse" />
              ))
            : posts.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square overflow-hidden rounded-lg group"
                >
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a
              href="https://instagram.com/mcgheecontracting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Follow @mcgheecontracting
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
