import React from 'react'

export default async function page() {
await new Promise(res=>{
  setTimeout(() => {
    res("internal delay")
  }, 2000);
})
  return (
    <div>
      <h1>blogs</h1>
    </div>
  )
}
