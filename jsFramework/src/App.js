import React from "react";
import Heading from "./components/layout/Heading";
import Layout from "./components/layout/Layout";
import style from "./sass/style.scss";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<>
			<div className="wrapper">
				<Layout>
					<Heading />
				</Layout>
			</div>
			<Footer />
		</>
	);
}

export default App;
