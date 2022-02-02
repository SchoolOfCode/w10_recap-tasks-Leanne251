import React, { useState } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import './NewPost.css';

function NewPost(props) {
	const [ newPost, setNewPost ] = useState([]);

	let value = '';

	function getPost(e) {
		value = e.target.value;
	}

	function addPost(e) {
		e.preventDefault();
		setNewPost([ ...newPost, value ]);
	}

	console.log(newPost, 'posts');

	return (
		<div>
			<form className="container">
				<h3>Leave a post about pigeons...</h3>
				<br />
				<textarea
					rows="4"
					cols="60"
					type="text"
					name="postInput"
					onChange={getPost}
					placeholder="your post here"
				/>
				<br />
				<button className="postButton" onClick={addPost}>
					Submit
				</button>
			</form>

			{newPost.map((element) => {
				return (
					<div className="container">
						{element}
						<br />
						<CommentForm />
					</div>
				);
			})}
		</div>
	);
}

export default NewPost;
