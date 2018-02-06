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
      this.setState({books: books});
    })
  }

  changeShelf = (newBook: any, newShelf: string) => {
  	BooksAPI.update(newBook, newShelf).then(response =>{
	  console.log(newBook);
      
      newBook.shelf = newShelf

      var updatedBooks = this.state.books.filter( book => book.id !== newBook.id )

      updatedBooks.push(newBook);
      
      this.setState({ books: updatedBooks })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={( {history}) => (
			<SearchPage
    		currentBooks={this.state.books}
    		onChangeShelf={this.changeShelf}
    		/>
  		)} />
		<Route exact  path="/" render={ () => (
         <BookShelf
			onChangeShelf={this.changeShelf}
         	books={this.state.books}                              
		 />
		)} />
	</div>
    )
  }
}

export default BooksApp
