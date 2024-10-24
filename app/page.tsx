'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home/hero-image.png"
            alt="Suzuki Premier flagship model"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Suzuki Swift
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Experience the new normal of efficient, stylish driving
          </p>
          <Link
            href="/models/swift"
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
          >
            Explore Cars
          </Link>
        </div>
      </section>
    </div>
  );
}
