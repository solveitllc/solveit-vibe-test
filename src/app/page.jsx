import ClientList from '@/components/ClientList'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">SolveIT - Client Manager</h1>
      <ClientList apiKey="sk_live_abc123xyz" />
    </main>
  )
}
