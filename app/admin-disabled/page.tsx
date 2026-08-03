import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const leads = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const today = new Date().toDateString();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">
          AdmissionCruise Admin Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          Manage all student enquiries
        </p>

        <div className="grid md:grid-cols-4 gap-5 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Total Leads</p>
            <h2 className="text-3xl font-bold text-blue-700">
              {leads.length}
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-500">Today's Leads</p>
            <h2 className="text-3xl font-bold text-green-600">
              {
                leads.filter(
                  (lead: typeof leads[number]) =>
                    new Date(lead.createdAt).toDateString() === today
                ).length
              }
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Course</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Date</th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead: typeof leads[number]) => (
                <tr
                  key={lead.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">{lead.name}</td>
                  <td className="p-4">{lead.phone}</td>
                  <td className="p-4">{lead.email}</td>
                  <td className="p-4">{lead.course}</td>

                  <td className="p-4">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {lead.status}
                    </span>
                  </td>

                  <td className="p-4">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}