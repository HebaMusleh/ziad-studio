import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Style } from './style';

const Card = ({ img, id, title }) => {
    const navigate = useNavigate();
    return (
        <Style onClick={() => navigate(`/work/${id}`)}>
            <img src={img} alt="work img" />
            <div className="overlay"></div>
            <div class="overlay"></div>
            <div class="work-desc">
                <h3>{title}</h3>
                <hr />
            </div>
        </Style>
    )
}

export default Card