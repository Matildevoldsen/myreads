import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Book extends Component {
 render() {	
  const { book, books, changeShelf } = book;
  const id = book.id;
  const title = book.title;
  const authors = book.authors;
  const	coverImg = book.imageLinks;
  
  return (
    	<li key={id}>
			<div className="book">
              <div className="book-top">
				<div className="book-cover" style={{ backgroundImage: `url(${coverImg})` }}></div>
					<div className="book-shelf-changer">
						<select>
							<option value="none" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
						</select>
					</div>
				</div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
			</div>
	</li>
    );
 }
}

export default Book;