'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const CATEGORIES = ["RESIDENTIAL", "COMMERCIAL", "INDUSTRIAL", "OTHERS"] as const

export default function SearchSection() {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("RESIDENTIAL")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold">
          Properties in Pune
        </h2>
        
        <div className="flex gap-8 border-b">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`pb-2 px-1 ${
                activeCategory === category
                  ? "border-b-2 border-orange-500 text-gray-900 font-medium"
                  : "text-gray-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <Select defaultValue="pune">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Katraj">Katraj</SelectItem>
              <SelectItem value="Kondhwa">Kondhwa</SelectItem>
              <SelectItem value="Kothrud">Kothrud</SelectItem>
              <SelectItem value="Bibwewadi">Bibwewadi</SelectItem>
              <SelectItem value="Bavdhan">Bavdhan</SelectItem>
              <SelectItem value="Wagholi">Wagholi</SelectItem>
            </SelectContent>
          </Select>
          
          <Input 
            type="text" 
            placeholder="Search for plots" 
            className="flex-1"
          />
          
          <Button className="px-8 bg-zinc-900 hover:bg-zinc-800">
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

