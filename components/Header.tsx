import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6">
      <Link href="/" className="text-2xl font-bold text-white">
        Suzuki Premier
      </Link>
      <div className="hidden md:flex space-x-6">
        <Link href="/models" className="text-white hover:text-gray-300">
          Models
        </Link>
        <Link href="/about" className="text-white hover:text-gray-300">
          About
        </Link>
        <Link href="/inventory" className="text-white hover:text-gray-300">
          Inventory
        </Link>
        <Link href="/contact" className="text-white hover:text-gray-300">
          Contact
        </Link>
      </div>
      <button className="md:hidden text-white">
        <Menu size={24} />
      </button>
    </nav>
  )
}
