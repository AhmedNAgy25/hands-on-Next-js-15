import React from 'react'

export default function BlogDetailsLayout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <header className='bg-blue-700 text-center text-white'>inner header</header>
      {children}
      <footer className='bg-blue-700 text-center text-white'>inner footer</footer>
    </div>
  )
}
