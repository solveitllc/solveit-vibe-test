import './globals.css'

export const metadata = {
  title: 'SolveIT - Vibe Coder Test',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
