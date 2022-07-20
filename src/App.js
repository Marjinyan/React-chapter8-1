import React from 'react'
import './App.css'
import Book from './pages/Book'
class App extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    fetch("data/books.json")
      .then(response => response.json())
      .then(data => {
        this.setState({ books: data.items })
      })
  }
  render() {
    const {books} = this.state

    return <div id="main">
      <h1>Welcome to Book Store</h1>
      <div id="books">
        {
          books.map((elm) => {
            return <Book 
                      id={elm.id}
                      title={elm.title}
                      author={elm.author}
                      pic={elm.pic}
                   />
          })
        }
      </div>

    </div>
  }
}
export default App
