import React from 'react'
import Opselect from './Opselect'
export default function Interestin() {
  return (
    <div>
      <text>Just choose one. This will help us get you started.(But won't limit your experience) </text>
      <Opselect emoji="📈" text="Learning skills to advance my career" />
      <Opselect emoji="🌐" text="Exploring new topics i'm interested in" />
      <Opselect emoji="🧮" text="Refreshing my math foundation" />
      <Opselect emoji="🧠" text="Enhancing my brain to stay sharp" />
      <Opselect emoji="👀" text="Something else" />
    </div>
  )
}

