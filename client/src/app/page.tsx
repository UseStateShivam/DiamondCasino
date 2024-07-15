'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

function Root() {
  const router = useRouter()
  return (
    <>
      <div>click on the game to play</div>
      <section className='flex gap-3'> 
        <button 
          onClick={() => {
            router.push('/plinko')
          }}
          >
          plinko
        </button>
        <button
          onClick={() => {
            router.push('/mines')
          }}
          >
          mines
        </button>
        <button
          onClick={() => {
            router.push('/blackjack')
          }}
          >
          blackjack
        </button>
      </section>
    </>
  )
}

export default Root