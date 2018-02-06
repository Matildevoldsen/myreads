import React, { Component } from 'react';

class ShelfChanger extends Component {
 render() {	
  	let currentShelf = this.props.shelf;
    
	return (
      	<select value={currentShelf} onChange={e => this.props.onChangeShelf(this.props.book, e.target.value)} >
			<option value="none" disabled>Move to...</option>
			<option value="currentlyReading">Currently Reading</option>
			<option value="wantToRead">Want to Read</option>
			<option value="read">Read</option>
            <option value="none">None</option>
		</select>
    );
 }
}

export default ShelfChanger;