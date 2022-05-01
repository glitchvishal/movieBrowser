import React from 'react'
import { useNavigate } from 'react-router-dom'
import './store.css'

function Card({movie}) {

  const navigate = useNavigate()

  const { Title, Year, Type, Poster, imdbID  } = movie


  return (
    <div className="card" onClick={() => navigate(`/movie/${imdbID}`)}>
        <h2>{ Title }</h2>
        <p>{ Year }</p>
        <img  src={ Poster } alt={ Title }/>
        <p>{ Type }</p>
    </div>
  )
}

export default Card