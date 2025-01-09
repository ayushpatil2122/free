import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
          <span className="text-2xl font-bold">YASHODHA ENTERPRISES</span>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-400">
                <span className="sr-only">X (Twitter)</span>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-400">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-gray-400">About</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Careers</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Bidding</Link></li>
            </ul>
          </div>

          {/* Properties Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PROPERTIES</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-400">Residential</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Commercial</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Industries</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Private</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SIGNUP FOR NEWS LETTER</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter email"
                className="bg-transparent border-gray-600"
              />
              <Button variant="secondary">Submit</Button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-gray-400">Blogs</Link></li>
                <li><Link href="#" className="hover:text-gray-400">FAQs</Link></li>
                <li><Link href="#" className="hover:text-gray-400">Live Support</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">

          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white">Refund policy</Link>
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

