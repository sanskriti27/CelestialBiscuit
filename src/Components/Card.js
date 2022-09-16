import React from 'react'
import { FlipCard } from "react-flipme"
const Card = () => {
  return (
    <FlipCard>
        <FlipCard.Front className="cardFront card">
            <h3 >PROJECT NAME</h3>
        </FlipCard.Front>
        <FlipCard.Back className="cardBack card">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the le</p>
        </FlipCard.Back>
    </FlipCard>
  )
}

export default Card