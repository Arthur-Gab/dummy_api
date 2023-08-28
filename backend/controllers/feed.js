exports.getPosts = (req, res) => {
	res.status(202).json({
		posts: [{ title: "Frist Post", content: "This is the first post!" }],
	});
};

exports.createPosts = (req, res) => {
	const title = req.body.title;
	const content = req.body.content;

	console.log(title, content);

	// Create post in db
	res.status(201).json({
		message: "Post creted sucessfully",
		post: {
			id: new Date().toISOString(),
			title,
			content,
		},
	});
};
