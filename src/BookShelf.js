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
    		<div className="bookshelf">
    			<h2 className="bookshelf-title">
    				Currently Reading
    			</h2>
    			
    			<div className="bookshelf-books">
          			<ol className="books-grid">
    					{this.props.books.filter(listed => listed.shelf === "currentlyReading").map(listed =>
    						<Book
								onChangeShelf={this.props.onChangeShelf}
    							key={listed.id}
    							listedBook={listed}
								shelf={listed.shelf}
    						/>
    					)} 
    				</ol>
    			</div>
    		</div>
    		<div className="bookshelf">
    			<h2 className="bookshelf-title">
    				Want to read
    			</h2>
    			
    			<div className="bookshelf-books">
          			<ol className="books-grid">
    					{this.props.books.filter(listed => listed.shelf === "wantToRead").map(listed =>
    						<Book
                         		onChangeShelf={this.props.onChangeShelf}
    							key={listed.id}
    							listedBook={listed}
								shelf={listed.shelf}
    						/>
    					)} 
    				</ol>
    			</div>
    		</div>
    		<div className="bookshelf">
    			<h2 className="bookshelf-title">
    				Read
    			</h2>
    			
    			<div className="bookshelf-books">
          			<ol className="books-grid">
    					{this.props.books.filter(listed => listed.shelf === "read").map(listed =>
    						<Book
                         		onChangeShelf={this.props.onChangeShelf}
    							key={listed.id}
    							listedBook={listed}
								shelf={listed.shelf}
    						/>
    					)} 
    				</ol>
    			</div>
    		</div>
    	</div>
		<div className="open-search"><Link to="/search">Add a book</Link></div>
    </div>
  ); 
 }
}

export default BookShelf;
