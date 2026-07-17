// app/page.tsx
"use client";

import { useState } from "react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { label: "Total Leads", value: "1,284" },
    { label: "New Today", value: "18" },
    { label: "Conversion Rate", value: "12.4%" },
    { label: "Active Forms", value: "6" },
  ];

  const recentLeads = [
    { name: "Rohan Patil", form: "3BHK Enquiry - Nashik Rd", status: "New", date: "17 Jul" },
    { name: "Sneha Kulkarni", form: "Site Visit Request", status: "Contacted", date: "17 Jul" },
    { name: "Amit Deshmukh", form: "3BHK Enquiry - Nashik Rd", status: "New", date: "16 Jul" },
    { name: "Priya Joshi", form: "Callback Request", status: "Converted", date: "16 Jul" },
    { name: "Vikram Shah", form: "Site Visit Request", status: "Lost", date: "15 Jul" },
  ];

  const statusColor: Record<string, string> = {
    New: "bg-blue-100 text-blue-700",
    Contacted: "bg-yellow-100 text-yellow-700",
    Converted: "bg-green-100 text-green-700",
    Lost: "bg-gray-100 text-gray-600",
  };

  const activity = [
    "Sneha Kulkarni marked as Contacted",
    "New lead from '3BHK Enquiry - Nashik Rd' form",
    "Priya Joshi converted",
    "Facebook form mapping updated for Page: SB Realty",
  ];

  const navItems = ["Dashboard", "Leads", "Facebook Forms", "Settings"];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 md:flex">
      {/* Mobile overlay — click to close the drawer */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
        />
      )}

      {/* Sidebar: fixed drawer on mobile, static column on desktop */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 md:w-56 bg-white border-r
          flex flex-col z-30 transform transition-transform duration-200
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="px-5 py-4 text-lg font-bold border-b flex items-center justify-between">
          Northline CRM
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-400 text-xl leading-none"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 text-sm">
          {navItems.map((item, i) => (
            
              key={item}
              href="#"
              className={`block px-3 py-2 rounded ${
                i === 0 ? "bg-gray-100 font-medium" : "hover:bg-gray-100"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="flex items-center justify-between px-4 md:px-6 py-4 bg-white border-b sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-gray-600"
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-2 md:gap-3 text-sm">
            <span className="text-gray-500 hidden sm:inline">Shubham</span>
            <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0" />
          </div>
        </header>

        <main className="p-4 md:p-6 space-y-6">
          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white border rounded p-3 md:p-4">
                <p className="text-xs md:text-sm text-gray-500">{s.label}</p>
                <p className="text-xl md:text-2xl font-bold mt-1">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {/* Recent leads table — scrolls horizontally instead of squeezing columns */}
            <div className="md:col-span-2 bg-white border rounded overflow-hidden">
              <div className="px-4 py-3 border-b font-semibold text-sm">
                Recent Leads
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[480px]">
                  <thead className="text-left text-gray-500 border-b">
                    <tr>
                      <th className="px-4 py-2 font-medium">Name</th>
                      <th className="px-4 py-2 font-medium">Form</th>
                      <th className="px-4 py-2 font-medium">Status</th>
                      <th className="px-4 py-2 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentLeads.map((lead) => (
                      <tr key={lead.name} className="border-b last:border-0">
                        <td className="px-4 py-3 whitespace-nowrap">{lead.name}</td>
                        <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{lead.form}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${statusColor[lead.status]}`}
                          >
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{lead.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity feed */}
            <div className="bg-white border rounded">
              <div className="px-4 py-3 border-b font-semibold text-sm">
                Activity
              </div>
              <ul className="p-4 space-y-3 text-sm text-gray-600">
                {activity.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gray-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}