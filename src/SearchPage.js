import React from "react";
import { Link } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import "./App.css";
import book from './Book';

class SearchPage extends React.Component {
  	state = {
     query: "",
     books: [],
     err: false
    }
  
    updateQuery = (target: string) => {
      	BooksAPI.search(target).then((list) => {
          	list.length > 0 ? this.setState({books: list, err: false}) : this.setState({books: list, err: true})
        })
    }

	updateBooks = (bookList) => {
      	this.setState({
      		books: bookList
      	});
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
                     <li key={book.id} className="book">
						<div className="book-top">
							<div
                    		className="book-cover"
                    		style={{
                     	 		backgroundImage: 
                                "url(" + book.imageLinks.thumbnail + ")"}}/>
						</div>
						<div className="book-shelf-changer">
							<select
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
					 </li>
					)}
				</ol>
            </div>
          </div>
		</div>
    	)
    }
}

export default SearchPage;