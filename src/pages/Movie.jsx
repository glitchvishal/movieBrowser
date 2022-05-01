import React,{useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './page.css'

function Movie() {

    const navigate = useNavigate()
    const { id } = useParams()
    const [movie, setMovie ] = useState(null)

    const getDetails = async() => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=a681eecb&i=${id}`)
        const data= await response.json()
        setMovie(data)
    }

    useEffect(() =>getDetails())

  return (
    <div className="movie">
        
        <div className="movie-container">
        {movie && <>
        <img src={movie.Poster} alt={movie.Title}/>
        <h1>{ movie.Title } </h1>
        <p>{movie.Year}</p>
        <p className="director">{movie.Director}</p>
        <p>{movie.Plot}</p>
        <p>{movie.Awards}</p>
        </>}
        <button onClick={() => navigate(-1)} >Back</button>
        </div>
    </div>
  )
}

export default Movie