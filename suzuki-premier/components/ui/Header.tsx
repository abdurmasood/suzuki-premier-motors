import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Suzuki Logo" width={30} height={30} />
          <span className="ml-2 text-xl font-bold">Suzuki Premier Motors</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          {["Vehicles", "Servicing", "Owner"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                {item}
              </Button>
            </Link>
          ))}
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
            <Globe className="w-5 h-5" />
          </Button>
        </nav>
      </div>
    </header>
  );
}
