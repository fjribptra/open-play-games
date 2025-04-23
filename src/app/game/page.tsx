
import DiscoverGamePage from "@/components/pages/DiscoverGamePage";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Discover Games - Open Play Games',
  description: 'Explore and discover a wide variety of games on OpenPlay Games. Find your next favorite game across different categories.',
  openGraph: {
    title: 'Discover Games - OpenPlay Games',
    description: 'Explore and discover a wide variety of games on OpenPlay Games. Find your next favorite game across different categories.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OpenPlay Games - Discover Games',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Games - OpenPlay Games',
    description: 'Explore and discover a wide variety of games on OpenPlay Games. Find your next favorite game across different categories.',
    images: ['/og-image.jpg'],
  },
} 
export default function Page() {
  return (
    <DiscoverGamePage/>
  )
}