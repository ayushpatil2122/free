"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { properties, Property } from "../data/properties"
import { PropertyModal } from "./PropertyModal"
import { useModal } from "../hooks/useModal"

export function ExploreProperties() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const { isOpen, openModal, closeModal } = useModal()

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property)
    openModal()
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Explore Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card key={property.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePropertyClick(property)}>
            <CardHeader>
              <CardTitle>{property.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <p className="text-gray-600 mb-2">{property.address}</p>
              <p className="font-bold">${property.price.toLocaleString()}</p>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>{property.bedrooms} beds</span>
                <span>{property.bathrooms} baths</span>
                <span>{property.squareFootage} sqft</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <PropertyModal property={selectedProperty} isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

