export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4 text-xl font-bold">
        Substy Dashboard
      </header>
      <main className="p-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Messages récents</h2>
          <ul className="space-y-2">
            <li className="p-2 border rounded hover:bg-gray-50">Miko - "je suis en pause"</li>
            <li className="p-2 border rounded hover:bg-gray-50">Dhelae - "ça va ?"</li>
            <li className="p-2 border rounded hover:bg-gray-50">mickael friant - "Les demandes..."</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
