import Image from "next/image";

const featuredListings = [
  {
    id: 1,
    title: "Modern Family Villa",
    location: "Nashik, Maharashtra",
    price: "₹1.85 Cr",
    beds: 4,
    baths: 3,
    area: "3,200 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Downtown Luxury Apartment",
    location: "Pune, Maharashtra",
    price: "₹98 L",
    beds: 3,
    baths: 2,
    area: "1,650 sq.ft",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Cozy Suburban Bungalow",
    location: "Mumbai, Maharashtra",
    price: "₹2.4 Cr",
    beds: 5,
    baths: 4,
    area: "4,000 sq.ft",
    image:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=800&auto=format&fit=crop",
  },
];

const stats = [
  { label: "Properties Listed", value: "2,400+" },
  { label: "Happy Clients", value: "1,800+" },
  { label: "Cities Covered", value: "35+" },
  { label: "Years of Trust", value: "12" },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      {/* Navbar */}
      <header className="w-full border-b border-black/[.08] dark:border-white/[.145]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Nestly
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 sm:flex">
            <a href="#" className="hover:text-black dark:hover:text-white">Buy</a>
            <a href="#" className="hover:text-black dark:hover:text-white">Rent</a>
            <a href="#" className="hover:text-black dark:hover:text-white">Sell</a>
            <a href="#" className="hover:text-black dark:hover:text-white">Agents</a>
          </nav>
          
            href="#"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            List Property
          </a>
        </div>
      </header>

      <main className="flex w-full flex-1 flex-col items-center">
        {/* Hero */}
        <section className="relative flex w-full flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop"
              alt="Modern house exterior"
              fill
              priority
              className="object-cover opacity-30 dark:opacity-20"
            />
          </div>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            Find the place you&apos;ll love to call home
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Browse thousands of verified listings across India&apos;s top cities —
            buy, rent, or sell with confidence.
          </p>

          {/* Search bar */}
          <div className="mt-10 flex w-full max-w-2xl flex-col gap-3 rounded-2xl border border-black/[.08] bg-white p-3 shadow-sm dark:border-white/[.145] dark:bg-zinc-900 sm:flex-row">
            <input
              type="text"
              placeholder="Enter a city, locality, or landmark"
              className="flex-1 rounded-xl border-0 bg-transparent px-4 py-3 text-sm text-black outline-none placeholder:text-zinc-400 dark:text-zinc-50"
            />
            <select className="rounded-xl bg-zinc-100 px-4 py-3 text-sm text-black outline-none dark:bg-zinc-800 dark:text-zinc-50">
              <option>Buy</option>
              <option>Rent</option>
              <option>New Projects</option>
            </select>
            <button className="rounded-xl bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]">
              Search
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full max-w-6xl border-y border-black/[.08] px-6 py-10 dark:border-white/[.145]">
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold text-black dark:text-zinc-50">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured listings */}
        <section className="w-full max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
                Featured Listings
              </h2>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                Hand-picked properties our agents recommend this week.
              </p>
            </div>
            
              href="#"
              className="hidden text-sm font-medium text-black hover:underline dark:text-zinc-50 sm:block"
            >
              View all listings →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredListings.map((listing) => (
              <div
                key={listing.id}
                className="overflow-hidden rounded-2xl border border-black/[.08] bg-white transition-shadow hover:shadow-lg dark:border-white/[.145] dark:bg-zinc-900"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {listing.location}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-black dark:text-zinc-50">
                    {listing.title}
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-black dark:text-zinc-50">
                    {listing.price}
                  </p>
                  <div className="mt-4 flex gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                    <span>{listing.beds} Beds</span>
                    <span>{listing.baths} Baths</span>
                    <span>{listing.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-24 w-full max-w-6xl rounded-3xl bg-foreground px-10 py-16 text-center text-background">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to find your next home?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-background/80">
            Talk to one of our verified local agents and get matched with
            properties that fit your budget.
          </p>
          
            href="#"
            className="mt-8 inline-block rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:opacity-90"
          >
            Get in Touch
          </a>
        </section>
      </main>

      <footer className="w-full border-t border-black/[.08] px-6 py-10 text-center text-sm text-zinc-500 dark:border-white/[.145] dark:text-zinc-400">
        © {new Date().getFullYear()} Nestly. All rights reserved.
      </footer>
    </div>
  );
}