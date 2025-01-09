import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="Auction bazaar"
              width={500}
              height={900}
              className="h-16 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/residential" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Residential
            </Link>
            <Link 
              href="/commercial" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Commercial
            </Link>
            <Link 
              href="/industrial" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Industrial
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="hidden md:inline-flex bg-[#8BC34A]/10 hover:bg-[#8BC34A]/20 text-[#8BC34A] border-[#8BC34A]"
          >
            Post Your Property
          </Button>
          <Link href="/signin" passHref>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button className="bg-zinc-900 hover:bg-zinc-800 text-white">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

