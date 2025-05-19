import React from "react";
import style from './page.module.css'

import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className={style.page}>
      <h2>Not Found</h2>
      <p>La Page que vous avez demander n'existe pas</p>
      <Link href="/" className="btn-link">Return Home</Link>
    </div>
  )
}