// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <span className="text-xl font-bold">Northline Homes</span>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#listings">Listings</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="bg-black text-white text-sm px-4 py-2 rounded">
          Contact Us
        </button>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find your next home
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Browse verified listings across the city — updated daily.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded">
          Browse Listings
        </button>
      </section>

      {/* Featured listings */}
      <section id="listings" className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Featured Listings</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded overflow-hidden">
              <div className="h-40 bg-gray-200" />
              <div className="p-4">
                <p className="font-semibold">₹85,00,000</p>
                <p className="text-sm text-gray-600">3 BHK · 1,450 sqft</p>
                <p className="text-sm text-gray-500">Nashik, Maharashtra</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t px-6 py-8 text-sm text-gray-500 text-center"
      >
        © {new Date().getFullYear()} Northline Homes. All rights reserved.
      </footer>
    </main>
  );
}
