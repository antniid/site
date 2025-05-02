// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'  {/* Changement ici */}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Creator(ish) - Monétise ton IA</title>
      </Head>
      <header className="bg-white shadow p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Creator(ish)</h1>
          <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800">
            Rejoindre la plateforme
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="text-center my-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            L'IA qui travaille pour toi.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Monétise ton audience avec un chat IA personnalisé, conçu pour vendre, séduire et engager pendant que tu dors.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
            Commencer maintenant
          </button>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">💬 Chat IA personnalisé</h3>
            <p className="text-gray-600">Ton jumeau numérique parle avec tes fans 24/7, dans ta voix et ton style.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">🔒 Accès réservé aux abonnés</h3>
            <p className="text-gray-600">Offre des conversations exclusives à tes abonnés OnlyFans ou autres plateformes.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">💸 Vente automatique</h3>
            <p className="text-gray-600">L'IA peut vendre ton contenu en PPV, upsell ou tips — automatiquement.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">📈 Dashboard créateur</h3>
            <p className="text-gray-600">Suis tes revenus, conversations et performances IA en temps réel.</p>
          </div>
        </section>

        <section className="text-center mt-24">
          <h2 className="text-3xl font-bold mb-4">Prêt à créer ton clone IA ?</h2>
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
            Créer mon profil
          </button>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-500 mt-24">
        © 2025 Creator(ish). Tous droits réservés.
      </footer>
    </div>
  );
}
