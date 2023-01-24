import React from 'react'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'

function Ratings({ ratings, text, color }) {
    return (
        <>
      
        <div className='ratings' >
            <span>
                <i style={{color}} className={ratings >= 1 ? 'fa-solid fa-star' : ratings >= 0.5 ? 'fa-solid fa-star-half-stroke' : 'fa-regular fa-star'}></i>
            </span>
            <span>
                <i style={{color}} className={ratings >= 2 ? 'fa-solid fa-star' : ratings >= 1.5 ? 'fa-solid fa-star-half-stroke' : 'fa-regular fa-star'}></i>
            </span>
            <span>
                <i style={{color}} className={ratings >= 3 ? 'fa-solid fa-star' : ratings >= 2.5 ? 'fa-solid fa-star-half-stroke' : 'fa-regular fa-star'}></i>
            </span>
            <span>
                <i style={{color}} className={ratings >= 4 ? 'fa-solid fa-star' : ratings >= 3.5 ? 'fa-solid fa-star-half-stroke' : 'fa-regular fa-star'}></i>
            </span>
            <span>
                <i style={{color}} className={ratings >= 5 ? 'fa-solid fa-star' : ratings >= 4.5 ? 'fa-solid fa-star-half-stroke' : 'fa-regular fa-star'}></i>
            </span>

             <span>{text && text}</span> 
        </div>
       
         </>
    )
}

Ratings.defaultProps = {
    color:'gold',
}

export default Ratings
