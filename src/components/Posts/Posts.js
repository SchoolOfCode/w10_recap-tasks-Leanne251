import React from 'react';
import articles from '../../libs/articles';
import CommentsList from '../ CommentsList/CommentsList';
import css from './posts.module.css';
import { Button, Icon, Center } from '@chakra-ui/react';
import { AiOutlineLike } from 'react-icons/ai';
import CommentForm from '../CommentForm/CommentForm';

function Posts(props) {
	return (
		<div>
			{articles.map((article) => {
				return (
					<article key={article.id} className={css.container}>
						<h2>{article.title}</h2>
						{article.paragraphs.map((paragraph) => <p key={paragraph.id}>{paragraph.text}</p>)}
						<Button colorScheme="teal" size="md" varient="ghost">
							<Center>
								Like
								<Icon as={AiOutlineLike} w={8} h={8} />
							</Center>
						</Button>
						{article.comments.map((comment) => <CommentsList key={comment.id} comment={comment} />)}

						<CommentForm />
					</article>
				);
			})}
		</div>
	);
}

export default Posts;

//
