import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe } from "lucide-react"

export default function HomePage() {
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

        <section className="mb-8 grid grid-cols-3 gap-4">
          {[
            "/images/home/alto.png",
            "/images/home/cultus.png",
            "/images/home/every.png",
          ].map((src, index) => (
            <Image key={index} src={src} alt={`Suzuki Vehicle ${index + 1}`} width={300} height={200} className="rounded-lg" />
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Find your perfect Suzuki</h2>
          <p className="mb-6">
            Whether you're looking for a compact car for city driving or a spacious SUV for family adventures, Suzuki has a wide
            range of vehicles to suit your needs. Explore our lineup and find your perfect match today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Compact Cars", image: "/placeholder.svg?height=200&width=300" },
              { title: "SUVs", image: "/placeholder.svg?height=200&width=300" },
              { title: "Vans & Wagons", image: "/placeholder.svg?height=200&width=300" },
            ].map((category, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover mb-4 rounded"
                  />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <Card className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">Suzuki News</h2>
                <p className="text-sm text-blue-500">Stay up to date with the latest news and events from Suzuki Pakistan</p>
              </div>
              <Button variant="default" className="bg-blue-500 hover:bg-blue-600">View All</Button>
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
