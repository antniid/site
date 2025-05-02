export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li className="mb-2">📥 Messages</li>
          <li className="mb-2">📊 Stats</li>
          <li className="mb-2">👥 Fans</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Bienvenue !</h1>
        <p className="text-gray-600">Voici ton espace de travail style Substy.</p>
      </main>
    </div>
  )
}
