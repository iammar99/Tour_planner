import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
        <Link to={"/agent"}>Agent</Link>
    </main>
  )
}
