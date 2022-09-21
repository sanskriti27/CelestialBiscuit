import React from 'react'

const PhotoGrid = () => {
  return (
    <div className='gallery-main'>
        <div className='gallery-container'>
        <div className='head'><h3>BIG BANG</h3><div className='line'></div></div>
        <div className='gallery'>
            <div className='row'>
                <div className='big'></div>
                <div className='column'>
                    <div>
                        <div className='block'></div>
                        <div className='block'></div>
                    </div>
                    <div>
                        <div className='block'></div>
                        <div className='block'></div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='column'>
                    <div>
                        <div className='block'></div>
                        <div className='block'></div>
                    </div>
                    <div>
                        <div className='block'></div>
                        <div className='block'></div>
                    </div>
                </div>
                <div className='big'></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PhotoGrid