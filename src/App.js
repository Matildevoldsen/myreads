import React from 'react'
import * as BooksAPI from "./BooksAPI"
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import SearchPage from './SearchPage'
import { Link } from 'react-router-dom'
import BookShelf from "./BookShelf";

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
	console.log(this.state.books);
  }

  changeShelf = (book, shelf) => {
  	BooksAPI.update(book, shelf).then(response =>{
    	book.shelf = shelf;
      	
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={( {history}) => (
			<SearchPage />
  		)} />
		<Route exact  path="/" render={ () => (
         <BookShelf
         	books={this.state.books}                              
		 />
		)} />
	</div>
    )
  }
}

export default BooksApp
