import { type NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
	useEffect(() => {
		console.log("Hello, World!");
	}, []);

	return <div>Hello, World!</div>;
};

export default Home;
