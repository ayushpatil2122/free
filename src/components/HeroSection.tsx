'use client'

import { Shield, BarChart, Users } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Premier Marketplace for Property Investments
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Discover unparalleled opportunities in real estate. Our platform offers a seamless experience for buying, selling, and investing in premium properties.
            </p>
            <div className="flex flex-wrap gap-6">
              <FeatureTag icon={Shield} text="Secure Transactions" />
              <FeatureTag icon={BarChart} text="Market Analytics" />
              <FeatureTag icon={Users} text="Expert Advisors" />
            </div>
            <div className="flex gap-4 pt-4">
              <Button size="lg">Explore Properties</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </motion.div>
          <motion.div 
            className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/hero.jpeg"
              alt="Luxury property showcase"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-2xl font-semibold mb-2">Featured Property</p>
              <p className="text-sm opacity-80">Exclusive waterfront villa with panoramic views</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function FeatureTag({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
      <Icon className="w-5 h-5 text-blue-600" />
      <span className="text-gray-800 font-medium">{text}</span>
    </div>
  )
}

