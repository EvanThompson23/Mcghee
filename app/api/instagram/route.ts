import { NextResponse } from "next/server"

export async function GET() {
  const userId = process.env.INSTAGRAM_USER_ID
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

  // If credentials aren't set up, return empty array
  if (!userId || !accessToken) {
    return NextResponse.json({
      posts: [],
      error: "Instagram credentials not configured",
    })
  }

  try {
    // Fetch recent media from Instagram Basic Display API
    const response = await fetch(
      `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}&limit=6`,
    )

    if (!response.ok) {
      throw new Error("Failed to fetch Instagram posts")
    }

    const data = await response.json()

    // Transform the data to match our component's needs
    const posts =
      data.data?.map((post: any) => ({
        id: post.id,
        image: post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url,
        alt: post.caption?.substring(0, 100) || "Instagram post",
        permalink: post.permalink,
      })) || []

    return NextResponse.json({ posts })
  } catch (error) {
    console.error("Instagram API error:", error)
    return NextResponse.json(
      {
        posts: [],
        error: "Failed to fetch Instagram posts",
      },
      { status: 500 },
    )
  }
}
