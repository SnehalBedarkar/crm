// app/page.tsx
export default function Dashboard() {
  const stats = [
    { label: "Total Leads", value: "1,284" },
    { label: "New Today", value: "18" },
    { label: "Conversion Rate", value: "12.4%" },
    { label: "Active Forms", value: "6" },
  ];

  const recentLeads = [
    {
      name: "Rohan Patil",
      form: "3BHK Enquiry - Nashik Rd",
      status: "New",
      date: "17 Jul",
    },
    {
      name: "Sneha Kulkarni",
      form: "Site Visit Request",
      status: "Contacted",
      date: "17 Jul",
    },
    {
      name: "Amit Deshmukh",
      form: "3BHK Enquiry - Nashik Rd",
      status: "New",
      date: "16 Jul",
    },
    {
      name: "Priya Joshi",
      form: "Callback Request",
      status: "Converted",
      date: "16 Jul",
    },
    {
      name: "Vikram Shah",
      form: "Site Visit Request",
      status: "Lost",
      date: "15 Jul",
    },
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

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r hidden md:flex flex-col">
        <div className="px-5 py-4 text-lg font-bold border-b">
          Northline CRM
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 text-sm">
          <a
            href="#"
            className="block px-3 py-2 rounded bg-gray-100 font-medium"
          >
            Dashboard
          </a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
            Leads
          </a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
            Facebook Forms
          </a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-500">Shubham</span>
            <div className="w-8 h-8 rounded-full bg-gray-200" />
          </div>
        </header>

        <main className="p-6 space-y-6">
          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white border rounded p-4">
                <p className="text-sm text-gray-500">{s.label}</p>
                <p className="text-2xl font-bold mt-1">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Recent leads table */}
            <div className="md:col-span-2 bg-white border rounded">
              <div className="px-4 py-3 border-b font-semibold text-sm">
                Recent Leads
              </div>
              <table className="w-full text-sm">
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
                      <td className="px-4 py-3">{lead.name}</td>
                      <td className="px-4 py-3 text-gray-500">{lead.form}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${statusColor[lead.status]}`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500">{lead.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
