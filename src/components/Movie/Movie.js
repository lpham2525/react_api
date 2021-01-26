import React from 'react'

const Movie = (props) => {
  console.log(props)
  return(
    <div>
      <img src={props.movie.Poster} alt={props.movie.Title} />
      <h1>{props.movie.Title}</h1>
      <h2>Directed by: {props.movie.Director}</h2>
      <p>Plot:{props.movie.Plot}</p>
    </div>
  )
}

export default Movie
