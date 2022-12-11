import React from 'react'

const PhotoGrid = () => {
  return (
    <div className='gallery-main'>
        <div className='gallery-container'>
        {/* <div className='head'><h3>BIG BANG</h3><div className='line'></div></div> */}
        <div className='container'>
            {/* <h1>COMING SOON....</h1> */}
            <div className='row-main'>
                <div className='column-main'>
                    <div className='big-main img1'></div>
                </div>
                <div className='column-main'>
                    <div className='row'>
                        <div className='big img2'></div>
                        <div className='small img3'></div>
                    </div>
                    <div className='row'>
                        <div className='small img4'></div>
                        <div className='big img5'></div>
                    </div>
                </div>
            </div>
            <div className='row-main'>
                <div className='column-main'>
                    <div className='row'>
                        <div className='big img6'></div>
                        <div className='small img7'></div>
                    </div>
                    <div className='row'>
                        <div className='small img8'></div>
                        <div className='big img9'></div>
                    </div>
                </div>
                <div className='column-main'>
                    <div className='big-main img10'></div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PhotoGrid