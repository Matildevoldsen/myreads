import React from "react";
import { Link } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Book from './Book';

class SearchPage extends React.Component {
  	state = {
     query: "",
     books: [],
     err: false
    }
  
    updateQuery = (target: string) => {
      	this.setState({query: target});
      
      	if (this.state.query.trim() && this.state.query) {
          BooksAPI.search(this.state.query).then((list) => {
               this.props.currentBooks.forEach(currentBook => {
				list.map(book => {
                 if (book.id === currentBook.id) book.shelf = currentBook.shelf; 
                });
        	   });
              
              list.length > 0 ? this.setState({books: list, err: false}) : this.setState({books: list, err: true})
          })
        } else { this.setState({err: true}) }
    }
  
	render() {
      	return (
        	<div>
         		<div className="search-books">
            		<div className="search-books-bar">
              			<Link 
             			className="close-search" 
             			to="/">Close</Link>
              				<div className="search-books-input-wrapper">
                <input 
				type="text"
				placeholder="Search by title or author"
				onChange={event => this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
            	<ol className="books-grid">
					{ this.state.err === false && this.state.books.map(book =>
      
      					<Book
      					onChangeShelf={this.props.onChangeShelf}
      					listedBook={book}
      					key={book.id}
						shelf={book.shelf}
      					/>
					)}
				</ol>
            </div>
          </div>
		</div>
    	)
    }
}

export default SearchPage;