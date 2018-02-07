import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger.js';

class Book extends Component {
 render() {	
  
    	
  return (
    	<li>
			<div className="book">
              <div className="book-top">
				<div className="book-cover" role="image"  style={{
    			backgroundImage:`url(${this.props.listedBook.imageLinks && this.props.listedBook.imageLinks.thumbnail?`${this.props.listedBook.imageLinks.thumbnail}`:`http://via.placeholder.com/128x193?text=No%20Cover`})`}}></div>
					<div className="book-shelf-changer">
						<ShelfChanger
							shelf={this.props.shelf}
							book={this.props.listedBook}
							onChangeShelf={this.props.onChangeShelf}
						/>
					</div>
				</div>
                <div className="book-title">{this.props.listedBook.title}</div>
    			<div className="book-authors">{Array.isArray(this.props.listedBook.authors) ? this.props.listedBook.authors.join(', '):'' && this.props.listedBook.authors.map(author =>
              			{author}
    			)}
    			</div> 
			</div>
	</li>
    );
 }
}

export default Book;