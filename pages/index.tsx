// pages/index.tsx
import React from 'react';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-6">Substy</h2>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-blue-600">Dashboard</a>
          <a href="#" className="block hover:text-blue-600">Chats</a>
          <a href="#" className="block hover:text-blue-600">Scripts</a>
          <a href="#" className="block hover:text-blue-600">Billing</a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex">
        {/* Chat list */}
        <section className="w-1/4 border-r bg-white p-4 overflow-y-auto">
          <input type="text" placeholder="Search fan..." className="w-full mb-4 p-2 border rounded" />
          <ul className="space-y-3">
            <li className="p-2 border rounded hover:bg-gray-100 cursor-pointer">Hot359</li>
            <li className="p-2 border rounded hover:bg-gray-100 cursor-pointer">ninel yoan</li>
            <li className="p-2 border rounded hover:bg-gray-100 cursor-pointer">mickael friant</li>
          </ul>
        </section>

        {/* Message feed */}
        <section className="w-2/4 p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold mb-2">Chat avec Miko</h3>
            <div className="space-y-2">
              <div className="bg-gray-200 p-2 rounded max-w-sm">Cool moi je suis en pause</div>
              <div className="bg-blue-500 text-white p-2 rounded self-end max-w-sm">profite bien de ta pause</div>
              <div className="bg-blue-500 text-white p-2 rounded self-end max-w-sm">je suis encore en live je te parle après</div>
            </div>
          </div>
          <div className="mt-4">
            <input type="text" placeholder="Type something..." className="w-full p-2 border rounded" />
          </div>
        </section>

        {/* Fan profile */}
        <section className="w-1/4 border-l bg-white p-4">
          <h4 className="font-semibold mb-4">Fan Profile</h4>
          <p><strong>Location:</strong> région parisienne</p>
          <p><strong>Platform:</strong> OnlyFans</p>
          <p><strong>Total Spent:</strong> $0</p>
          <p><strong>Subscribed:</strong> Yes</p>
          <p><strong>Since:</strong> 22 days</p>
        </section>
      </main>
    </div>
  );
}
