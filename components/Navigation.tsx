import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Suzuki Premier</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="/#models" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Models</a>
            <a href="/#about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
            <a href="/#contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</a>
            <Link href="/inventory" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Inventory</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
