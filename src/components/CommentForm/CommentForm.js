import React, { useState } from 'react';
import css from './CommentForm.module.css';
import { Button } from '@chakra-ui/react';

function CommentForm() {
	const [ newComments, setNewComments ] = useState([]);

	// how would I add my new object to the exisiting comments of each object in the array?

	const addComments = {};

	function getName(e) {
		addComments.name = e.target.value;
	}

	function getComments(e) {
		addComments.text = e.target.value;
	}

	function setTheComment(e) {
		e.preventDefault();
		setNewComments([ ...newComments, addComments ]);
	}

	console.log('comments', newComments);

	return (
		<div className={css.container}>
			<h3> New Comments</h3>
			{newComments.map((element) => {
				return (
					<div key={element.index} className={css.commentPost}>
						<h5>{element.name} says:</h5>
						<p>{element.text}</p>
					</div>
				);
			})}

			<form className={css.formStyle}>
				<label>Your Name</label>
				<input type="text" name="name" placeholder="name" onChange={getName} />
				<br />
				<label>Comments</label>
				<input type="text" name="text" placeholder="comments" onChange={getComments} />
			</form>
			<Button onClick={setTheComment} colorScheme="teal" size="md" varient="ghost">
				Add Comment
			</Button>
		</div>
	);
}

export default CommentForm;
