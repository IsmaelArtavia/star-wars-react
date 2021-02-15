import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import Character from "./views/Character.jsx";
import Planet from "./views/Planet.jsx";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Personajes from "./component/Personajes.js";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/personajes">
							<Personajes />
						</Route>
						<Route exact path="/character/:id">
							<Character />
						</Route>
						<Route exact path="/planet/:id">
							<Planet />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
