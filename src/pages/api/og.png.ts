import { type APIRoute } from "astro";
import { ImageResponse } from "@vercel/og";

export const prerender = false

export const GET: APIRoute = async function GET() {
  const element = {
    type: 'div',
    key: 'og',
    props: {
      children: '👋 Hello World',
      style: {
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 48
      }
    }
  }
  return new ImageResponse(
    element
  )
}
