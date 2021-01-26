import React, { Component } from 'react'
import Form from './components/Form'
import Movie from './components/Movie'
import axios from 'axios'

class App extends Component {

  state = {
    title: '',
    movie: {}
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSearchMovie = event => {
    event.preventDefault()
    console.log(this.state.title)
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${this.state.title}`)
    .then(({ data }) => {
      console.log(data)
      this.setState({ movie: data, title: ''})
    })
    .catch(error => console.error(error))
  }

render() {
  return(
    <>
    <Form
    title={this.state.title}
    handleInputChange={this.handleInputChange}
    handleSearchMovie={this.handleSearchMovie} />
    {this.state.movie.Title ? <Movie movie={this.state.movie} /> : null}
    </>
  )
}
}

export default App
