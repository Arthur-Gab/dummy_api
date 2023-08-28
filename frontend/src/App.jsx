export default function App() {
	const getPost = async () => {
		console.log("Starting GetPosts");
		try {
			const response = await fetch("http://localhost:3939/feed/posts");

			if (!response.ok) {
				throw Errro("Can't getPost");
			}

			const responseData = await response.json();
			console.log(responseData);
		} catch (err) {
			console.log(err);
		}
	};

	const createPost = async () => {
		try {
			const response = await fetch("http://localhost:3939/feed/posts", {
				method: "POST",
				body: JSON.stringify({
					title: "A stackBlitz post",
					content: "Created via StackBlitz",
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				throw Errro("Can't create a Post");
			}

			const responseData = await response.json();
			console.log(responseData);
		} catch (err) {
			console.log(err);
		}
	};

	const divStyle = {
		padding: "10vw",
	};

	const paddingBtn = {
		marginRight: "2rem",
	};

	return (
		<div style={divStyle}>
			<h1>Front-End and BackEnd</h1>
			<p>
				In REST APIs the backend is decoupled from the frontend, that is, in an
				MVC architecture, I would remove the V that becomes the responsibility
				of the frontend (ReactJS), and would only deal with the other parts,
				handling requests and responses (parse + send JSON Data) validation,
				database communication, files, uploads, dowloads, etc.
			</p>
			<p>
				However session, cookies and authorizations also take a different
				approach compared to the server providing everything approach.
			</p>

			<button
				onClick={getPost}
				style={paddingBtn}
			>
				Get Posts
			</button>
			<button onClick={createPost}>Create a Post</button>
		</div>
	);
}
