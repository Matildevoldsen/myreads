import React, { Component } from 'react';

class Book extends Component {
 render() {	
  return (
    	<li>
			<div className="book">
              <div className="book-top">
				<div className="book-cover" style={{ backgroundImage: `url(${this.props.listedBook.imageLinks.thumbnail})` }}></div>
					<div className="book-shelf-changer">
						<select value={this.props.listedBook.shelf} onChange={e => this.props.onChangeShelf(this.props.listedBook, e.target.value)} >
							<option value="none" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
						</select>
					</div>
				</div>
                <div className="book-title">{this.props.listedBook.title}</div>
                <div className="book-authors">{this.props.listedBook.authors}</div>
			</div>
	</li>
    );
 }
}

export default Book;