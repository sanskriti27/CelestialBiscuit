
import React from 'react'
import { FlipCard } from "react-flipme"
const Card = ({project, desc}) => {
  return (
    <div className='card-main'>
      <FlipCard>
        <FlipCard.Front className="cardFront card">
            <h3>{project}</h3>
        </FlipCard.Front>
        <FlipCard.Back className="cardBack card">
            <p>{desc}</p>
        </FlipCard.Back>
    </FlipCard>
    </div>
  )
}

export default Card