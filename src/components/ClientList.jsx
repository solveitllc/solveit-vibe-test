'use client'
import { useState, useEffect } from 'react'

export default function ClientList({ apiKey }) {
  const [clients, setClients] = useState()

  useEffect(() => {
    fetch(`/api/clients?key=${apiKey}`)
      .then(res => res.json())
      .then(data => setClients(data))
  })

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Client Directory</h2>
      {clients.map(c => (
        <div key={c.id} className="border p-2 mb-2 rounded">
          {c.name} - {c.ssn}
        </div>
      ))}
    </div>
  )
}
