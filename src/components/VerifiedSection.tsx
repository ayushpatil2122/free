'use client'

import { Check, Gavel } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function VerifiedSection() {
  const features = [
    { title: '24x7 Support', delay: 0 },
    { title: 'Property Documents', delay: 0.2 },
    { title: 'Property Photos', delay: 0.4 },
    { title: 'Property Details', delay: 0.6 },
  ]

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          YASHODHA  ENTERPRISES VERIFIED
        </motion.h1>
        
        <motion.p 
          className="text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Check out the collection of best properties from multiple cities hand selected 
          and verified by yashodha enterprises team
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            variant="default" 
            size="lg" 
            className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-md"
          >
            View verified properties
          </Button>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex items-center justify-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <div className="bg-green-100 rounded-full p-1">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-gray-700">{feature.title}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
              <img 
                src="/Wagholi.jpeg" 
                alt="Property preview" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2 bg-orange-100 px-3 py-1 rounded-full">
              <Gavel className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 font-semibold">VERIFIED</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

