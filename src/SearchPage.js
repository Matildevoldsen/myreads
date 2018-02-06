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
      
      	if (this.state.query.trim()) {
          BooksAPI.search(this.state.query).then((list) => {
               this.props.currentBooks.forEach(currentBook => {
				list.map(book => {
                 if (book.id === currentBook.id) book.shelf = currentBook.shelf; 
                });
        	   });
              
              list.length > 0 ? this.setState({books: list, err: false}) : this.setState({books: list, err: true})
          })
        }
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
                			{/*
                  			NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  			You can find these search terms here:
                  			https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  			However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  			you don't find a specific author or title. Every search is limited by search terms.
                			*/}
                <input 
				type="text" 
				placeholder="Search by title or author"
				onChange={event => this.updateQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
            	<ol className="books-grid">
					{this.state.books.map(book =>
      
      					<Book
      					onChangeShelf={this.props.onChangeShelf}
      					listedBook={book}
      					key={book.id}
						shelf={book.shelf}
      					/>
      
                     /**<li key={book.id} className="book">
						<div className="book-top">
							<div
                    		className="book-cover"
                    		style={{
                     	 		backgroundImage: 
                                "url(" + book.imageLinks.thumbnail + ")"}}/>
						</div>
						<div className="book-shelf-changer">
							<select value={book.shelf} onChange={e => this.props.onChangeShelf(book, e.target.value)}
								value={book.shelf}>
								<option value="none" disabled>
                        			Move to...
                      			</option>
                      			<option value="currentlyReading">Currently Reading</option>
                      			<option value="wantToRead">Want to Read</option>
                      			<option value="read">Read</option>
                      			<option value="none">None</option>
							</select>
						</div>
						<div className="book-title">
                  			{book.title}
                		</div>
						{book.authors &&
                  			<div className="book-authors">
                    			{book.authors[0]}
                  		</div>}
					 </li>**/
					)}
				</ol>
            </div>
          </div>
		</div>
    	)
    }
}

export default SearchPage;