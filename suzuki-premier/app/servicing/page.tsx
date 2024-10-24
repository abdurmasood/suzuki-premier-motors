"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Wrench, ShieldCheck, Car } from "lucide-react"
import Header from "@/components/ui/Header"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import * as React from "react"
import { useRef } from "react"

export default function CarServicePage() {
  const [date, setDate] = React.useState<Date>()
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="relative h-[500px]">
          <Image
            src="/images/servicing/mechanic.png"
            alt="Suzuki SUV on a road"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-4 md:px-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get your Suzuki serviced by experts
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl">
              Take the best care of your Suzuki by having it serviced by our team of specialists. Book your service online and
              bring your car in at a time that suits you. You can also find out how much your service will cost before you book.
            </p>
            <Button
              size="lg"
              className="w-40 bg-white text-black hover:bg-white hover:text-black"
              onClick={scrollToForm}
            >
              Book Service
            </Button>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why service with us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Wrench className="w-12 h-12 text-blue-500" />,
                  title: "Suzuki Trained Technicians",
                  description: "Our technicians are trained to the highest standards, so they know your car inside and out. They use only the latest diagnostic equipment, tools, and Suzuki Genuine Parts.",
                },
                {
                  icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
                  title: "Genuine Suzuki Parts",
                  description: "We only ever use Suzuki Genuine Parts, which have been designed, tested, and manufactured according to Suzuki's detailed specifications. This ensures that they fit perfectly, work seamlessly, and last longer.",
                },
                {
                  icon: <Car className="w-12 h-12 text-blue-500" />,
                  title: "Courtesy Car or Local Lift",
                  description: "When you book a service, you can choose from a courtesy car, local lift, or while-you-wait appointment. These options make it easy to fit your service around your schedule, so you can get back on the road as soon as possible.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" ref={formRef}>
          <div className="container mx-auto px-4 max-w-md">
            <h2 className="text-3xl font-bold mb-8 text-center">Book a service</h2>
            <form className="space-y-6">
              {/* Removed location picker */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Select a service
                </label>
                <Select>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regular">Regular Service</SelectItem>
                    <SelectItem value="major">Major Service</SelectItem>
                    <SelectItem value="repair">Repair</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="registration" className="block text-sm font-medium text-gray-700 mb-1">
                  Vehicle registration number
                </label>
                <Input id="registration" placeholder="Enter registration number" />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Select a date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={`w-full justify-start text-left font-normal ${!date ? "text-muted-foreground" : ""}`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Button type="submit" className="w-full">
                Find a time
              </Button>
            </form>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Why is regular servicing important?</AccordionTrigger>
                <AccordionContent>
                  Regular servicing is important to ensure your vehicle remains safe, reliable and performing at its best. It allows our expert technicians
                  to identify and address any potential issues before they become major problems, reducing the risk of breakdowns and costly repairs.
                  Servicing also helps to maintain your vehicle's resale value and can improve fuel efficiency and performance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How often do I need to service my Suzuki?</AccordionTrigger>
                <AccordionContent>
                  The frequency of servicing depends on your specific Suzuki model and how you use your vehicle. Generally, we recommend servicing your Suzuki
                  every 12 months or 15,000 kilometers, whichever comes first. However, it's best to consult your vehicle's owner's manual or speak with our
                  service advisors for the most accurate service schedule for your particular model.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What's included in a logbook service?</AccordionTrigger>
                <AccordionContent>
                  A logbook service includes a comprehensive check and maintenance of your vehicle according to the manufacturer's specifications. This typically
                  includes oil and filter changes, checking and topping up all fluid levels, inspecting brakes, tires, and suspension components, checking the
                  battery and electrical system, and a road test to ensure everything is functioning correctly. The exact items covered may vary depending on
                  your vehicle's age and mileage.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  )
}
