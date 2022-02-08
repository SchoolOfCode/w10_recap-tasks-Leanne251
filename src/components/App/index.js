import './App.css';

// import articles from "../../libs/articles";
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import { Heading } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

function App() {
	return (
		<Container maxWidth="xl" padding={0}>
			<main className="App">
				<Heading as="h1" size="xl">
					WikiPigeon - Hello!
				</Heading>
				<NewPost />
				<Posts />
			</main>
		</Container>
	);
}

export default App;
