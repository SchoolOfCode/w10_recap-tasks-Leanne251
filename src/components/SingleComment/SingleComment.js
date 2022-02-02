import React from 'react';

function SingleComment({ comments }) {
	comments.map((comment) => {
		return (
			<div key={comment.id}>
				<h4>{comment.name} says:</h4>
				<p>{comment.text}</p>
			</div>
		);
	});
}

export default SingleComment;
