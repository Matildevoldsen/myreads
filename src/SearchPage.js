import React from "react";
import { Link } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import "./App.css";

class SearchPage extends React.Component {
  	state = {
     query: "",
     books: []
    }
  
    updateQuery = (target: string) => {
      
      const books = BooksAPI.search(target);
      
      if (books.error) {
       console.log(books.error); 
      } else {
      	this.setState(state => {
          state.books = books.map(book => {
            const idx = this.props.findBookInList(book.id);
            return idx !== -1
              ? this.props.books[idx]
              : Object.assign(book, { shelf: "none" });
          });
          return state;
        });
        		  console.log(this.state.books);
      }
    }
  
	render() {
      	return (
        	<div>
         		<div className="search-books">
            		<div className="search-books-bar">
              			<a 
             			className="close-search" 
             			onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
              <ol className="books-grid"></ol>
            </div>
          </div>
		</div>
    	)
    }
}

export default SearchPage;