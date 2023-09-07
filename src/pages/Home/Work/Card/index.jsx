import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ img, id }) => {
    const navigate = useNavigate();
    return (
        <div className='singleImg' onClick={() => navigate(`/work/${id}`)}>
            <img src={img} alt="work img" loading="lazy"/>
        </div>
    )
}

export default Card