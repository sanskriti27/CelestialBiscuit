import React from 'react'
import FounderCard from './FounderCard'

function RenderingCard({title}){
    const list = title.map(ele=>{
        return <FounderCard name={ele.name} title={ele.title} url={ele.url}/>
    })

    return(
    <>
        {list}
    </>
    )
}

const CardFill = ({title}) => { 
  return (
    <>
        <RenderingCard title={title}/>
    </>
  )
}

export default CardFill