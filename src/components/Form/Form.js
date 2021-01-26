import React from 'react'

const Form = (props) => {
  return (
    <form>
      <p>
        <label htmlFor='title'>title</label>
        <input
          type='text'
          name='title'
          id='title'
          onChange={props.handleInputChange}
          value={props.title}
        />
      </p>
      <p>
        <button onClick={props.handleSearchMovie}>Search Movie</button>
      </p>
    </form>
  )
}

export default Form
