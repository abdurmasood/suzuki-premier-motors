"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function HomePage() {
  const [isCompactCarsOpen, setIsCompactCarsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="Suzuki Logo" width={30} height={30} />
            <span className="ml-2 text-xl font-bold">Suzuki Premier Motors</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            {["Vehicles", "Motorcycles", "Marine", "Power Products", "Owners", "Dealers"].map((item) => (
              <Button key={item} variant="ghost" className="text-gray-600 hover:text-gray-900">
                {item}
              </Button>
            ))}
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <Globe className="w-5 h-5" />
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/home/swift.png"
              alt="Suzuki Swift 660cc"
              width={1200}
              height={600}
              className="w-full h-[400px] object-cover object-[center_80%]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
              <h1 className="text-4xl font-bold text-white mb-2">Experience the new Suzuki Swift</h1>
              <p className="text-white mb-4">
                We're excited to introduce the new Suzuki Swift, now with a 1197cc engine. With a modern design and advanced
                features, Swift is the perfect car for on & off city driving.
              </p>
              <Button className="w-32 bg-white text-black hover:bg-gray-100">Learn More</Button>
            </div>
          </div>
        </section>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: "/images/home/alto.png", name: "Suzuki Alto", description: "Compact & Efficient" },
            { src: "/images/home/cultus.png", name: "Suzuki Cultus", description: "Stylish & Versatile" },
            { src: "/images/home/every.png", name: "Suzuki Every", description: "Spacious & Practical" },
          ].map((vehicle, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
              <Image 
                src={vehicle.src} 
                alt={vehicle.name} 
                width={400} 
                height={300} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-bold text-white mb-1">{vehicle.name}</h3>
                <p className="text-sm text-gray-200">{vehicle.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Find your perfect Suzuki</h2>
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            Whether you're looking for a compact car for city driving or a spacious SUV for family adventures, Suzuki has a wide
            range of vehicles to suit your needs. Explore our lineup and find your perfect match today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Dialog open={isCompactCarsOpen} onOpenChange={setIsCompactCarsOpen}>
              <DialogTrigger asChild>
                <Card 
                  className="overflow-hidden group cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src="/images/home/compact-car.png"
                        alt="Compact Cars"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 bg-white transition-colors duration-300 group-hover:bg-gray-50">
                      <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-blue-600 leading-tight">
                        Compact Cars
                      </h3>
                      <p className="text-base text-gray-600 transition-colors duration-300 group-hover:text-gray-700 leading-relaxed">
                        Perfect for city driving
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Suzuki Compact Cars</DialogTitle>
                  <DialogDescription>
                    Explore our range of compact cars perfect for city driving.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {[
                    { name: "Suzuki Swift", description: "Sporty and stylish hatchback" },
                    { name: "Suzuki Cultus", description: "Fuel-efficient and practical" },
                    { name: "Suzuki Alto", description: "Compact and budget-friendly" },
                    { name: "Suzuki Wagon R", description: "Spacious interior with compact exterior" },
                  ].map((car, index) => (
                    <div key={index} className="flex flex-col">
                      <h4 className="font-semibold">{car.name}</h4>
                      <p className="text-sm text-gray-500">{car.description}</p>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

            {[
              { title: "SUVs", image: "/images/home/suv.png", description: "Ideal for family adventures" },
              { title: "Vans & Wagons", image: "/images/home/van.png", description: "Spacious and versatile" },
            ].map((category, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-white transition-colors duration-300 group-hover:bg-gray-50">
                    <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-blue-600 leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-base text-gray-600 transition-colors duration-300 group-hover:text-gray-700 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <Card className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">Browse Catalogue</h2>
                <p className="text-sm text-blue-500">Explore our full range of vehicles and find the perfect match for you</p>
              </div>
              <Button variant="default" className="bg-blue-500 hover:bg-blue-600">View Catalogue</Button>
            </div>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">&copy; 2023 Suzuki Motors Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
