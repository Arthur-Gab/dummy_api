const express = require("express");
const feedRoutes = require("./routes/feed");

const app = express();
const port = 3939;

app.use(express.json());
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, PATCH, DELETE"
	);
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

	next();
});

app.use("/feed", feedRoutes);

app.listen(port, () => {
	console.log(`Executando na porta ${port}`);
});
