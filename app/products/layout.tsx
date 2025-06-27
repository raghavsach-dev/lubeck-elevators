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
    <div className="min-h-screen bg-black pt-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex">
          <aside className="w-1/4 pr-8">
            <h2 className="font-heading text-2xl text-gold mb-4">Our Products</h2>
            <nav>
              <ul>
                {products.map((product) => (
                  <li key={product.path}>
                    <Link href={product.path} className="block py-2 hover:text-gold transition-colors">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className="w-3/4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 