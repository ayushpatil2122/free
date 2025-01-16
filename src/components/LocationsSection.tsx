'use client'

import { Gavel, MapPin } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const locations = [
  { name: 'Katraj', image: '/Baner.jpeg' },
  { name: 'Kondhwa', image: '/Hadapsar.jpeg' },
  { name: 'Kothrud', image: '/Kothrud.jpeg' },
  { name: 'Bibwewadi', image: '/Bibwewadi.jpeg' },
  { name: 'Bavdhan', image: '/Bavdhan.jpeg' },
  { name: 'Wagholi', image: '/Wagholi.jpeg' },
]

export default function LocationsSection() {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="bg-white rounded-full p-2 shadow-lg">
              <Gavel className="w-4 h-4 text-orange-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Heading */}
      <div className="text-center mb-12 relative">
        <h2 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-2 justify-center">
          AVAILABLE IN
          <span className="inline-flex gap-1">
            <MapPin className="w-6 h-6 text-purple-400" />
          </span>
          30+ 
          <br className="md:hidden" />
          LOCATIONS IN PUNE
        </h2>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {locations.map((location) => (
            <CarouselItem key={location.name} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
              <div className="relative group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                  {location.name}
                </h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12" />
        <CarouselNext className="hidden md:flex -right-12" />
      </Carousel>
    </div>
  )
}

