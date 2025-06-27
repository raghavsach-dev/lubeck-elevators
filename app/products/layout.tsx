import Link from 'next/link';

const products = [
  { name: 'Passenger Elevator', path: '/products/passenger' },
  { name: 'Hospital Elevator', path: '/products/hospital' },
  { name: 'Capsule Lifts', path: '/products/capsule' },
  { name: 'Goods Lift', path: '/products/goods' },
  { name: 'Home Lift', path: '/products/home' },
  { name: 'Structure Lift', path: '/products/structure' },
];

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="md:flex">
          <aside className="w-full md:w-1/4 md:pr-8 mb-10 md:mb-0">
            <h2 className="font-heading text-2xl md:text-3xl text-[#D4AF37] mb-4">Our Products</h2>
            <nav className="md:hidden">
              <ul className="flex overflow-x-auto space-x-4 pb-4 -mx-6 px-6">
                {products.map((product) => (
                  <li key={product.path} className="flex-shrink-0">
                    <Link href={product.path} className="block py-2 px-4 whitespace-nowrap bg-[#1C1C1C] rounded-md hover:text-[#D4AF37] transition-colors">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="hidden md:block">
              <ul>
                {products.map((product) => (
                  <li key={product.path}>
                    <Link href={product.path} className="block py-2 text-white/80 hover:text-[#D4AF37] transition-colors">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className="w-full md:w-3/4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 