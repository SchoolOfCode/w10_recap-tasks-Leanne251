import React from 'react';
import css from './commentList.module.css';

function CommentsList({ comment }) {
	return (
		<div>
			<div key={comment.id} className={css.container}>
				<h4>{comment.name} says:</h4>
				<p>{comment.text}</p>
			</div>
		</div>
	);
}

export default CommentsList;
// {
// 	);
// }
//
