"use client";
import { redirect } from 'next/navigation';
import React from 'react'

export default function NotFound() {
  
  return (
    <div className='mb-4'>
      <h1 className='text-center mt-96 text-7xl'>page not found go away (-_-)</h1>
      <p onClick={()=>redirect("/profile")}>go redirect you to profile</p>
    </div>
  )
}
