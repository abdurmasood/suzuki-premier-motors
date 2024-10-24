import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe } from "lucide-react"
import Footer from "@/components/ui/Footer" // Import the Footer component
import Header from "@/components/ui/Header" // Import the Header component

const carData = [
  { id: 1, name: "Swift", price: "From $23,000", image: "/images/vehicles/swift.png" },
  { id: 2, name: "Alto", price: "From $19,000", image: "/images/vehicles/alto.png" },
  { id: 3, name: "Cultus", price: "From $22,000", image: "/images/vehicles/cultus.png" },
  { id: 4, name: "Vitara", price: "From $26,000", image: "/images/vehicles/vitara.png" },
  { id: 5, name: "Jimny", price: "From $21,000", image: "/images/vehicles/jimny.png" },
  { id: 6, name: "Every", price: "From $15,000", image: "/images/vehicles/every.png" },
  { id: 7, name: "Wagon R", price: "From $18,000", image: "/images/vehicles/wagonr.png" },
]

export default function CarCatalogue() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Use the Header component */}
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Car Catalogue</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {carData.map((car) => (
            <Card key={car.id} className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-0">
                <Image
                  src={car.image}
                  alt={car.name}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h2 className="text-lg font-semibold text-white mb-1">{car.name}</h2>
                  <p className="text-sm text-gray-200 mb-2">{car.price}</p>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white text-black hover:bg-gray-100"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer /> {/* Use the Footer component */}
    </div>
  )
}
