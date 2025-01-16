import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Property } from "../data/properties"

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  if (!property) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{property.title}</DialogTitle>
          <DialogDescription>{property.address}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover rounded-lg" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>Price:</strong> ${property.price.toLocaleString()}
            </div>
            <div>
              <strong>Bedrooms:</strong> {property.bedrooms}
            </div>
            <div>
              <strong>Bathrooms:</strong> {property.bathrooms}
            </div>
            <div>
              <strong>Square Footage:</strong> {property.squareFootage}
            </div>
          </div>
          <p>{property.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

