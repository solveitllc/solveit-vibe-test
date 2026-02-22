import { NextResponse } from 'next/server'

const MOCK_CLIENTS = [
  { id: 1, name: 'Carlos Mendoza', ssn: '123-45-6789', email: 'carlos@example.com' },
  { id: 2, name: 'Maria Torres', ssn: '987-65-4321', email: 'maria@example.com' },
  { id: 3, name: 'Roberto Diaz', ssn: '456-78-9012', email: 'roberto@example.com' },
]

export async function GET() {
  return NextResponse.json(MOCK_CLIENTS)
}
