import React from 'react'
import Card from './Card'

function RenderingCard({theme}){
    const list = theme.map(ele=>{
        return <Card project={ele.ProjectName} desc={ele.Desc} />
    })

    return(
       <div className="inner-card-group">
         {list}
       </div>
    )
}

const CardFill = ({theme}) => {
    
    
  return (
    <div className='card-group'>
        <RenderingCard theme={theme}/>
    </div>
  )
}

export default CardFill