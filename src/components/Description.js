import React from 'react'
import Opselect from './Opselect'
export default function Description() {
  return (
    <div>
      <text>This will help us to personalize your experience/text</text>
      <Opselect emoji="👩🏻" bold="Student" text=" or soon to be enrolled" />
      <Opselect emoji="👩🏻‍⚕️" bold="Professional" text=" pursuing a career" />
      <Opselect emoji="👩‍💼" bold="Parent" text=" of a school aged child" />
      <Opselect emoji="👨🏻‍💻" bold="LifeLong Learner" text="" />
      <Opselect emoji="👩‍🏫" bold="Teacher" text="" />
      <Opselect emoji="🤷🏻‍♂️" bold="Other" text="" />

    </div>
  )
}

