import React, { Component } from 'react';
import Book from './Book'
import { Link } from 'react-router-dom'

class BookShelf extends Component {
 render() {
  return (
  	<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
    	<div className="list-books-content">
    		
    	</div>
		<div className="open-search"><Link to="/search">Add a book</Link></div>
    </div>
  ); 
 }
}

export default BookShelf;
