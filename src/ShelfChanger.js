import React, { Component } from 'react';

class ShelfChanger extends Component {
 render() {	
  	let currentShelf = 'none';
    
	return (
      	<select value={this.props.shelf ? this.props.shelf : currentShelf} onChange={e => this.props.onChangeShelf(this.props.book, e.target.value)} >
			<option value="" disabled>Move to...</option>
			<option value="currentlyReading">Currently Reading</option>
			<option value="wantToRead">Want to Read</option>
			<option value="read">Read</option>
            <option value="none">None</option>
		</select>
    );
 }
}

export default ShelfChanger;