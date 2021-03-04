import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Ingresar = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || pass === "") {
			alert("correo y contraseña son requeridos");
		}
		console.log(email, pass);

		// FETCH
		const data = { email: email, password: pass };

		fetch("https://3000-fuchsia-finch-ukfmiw0c.ws-us03.gitpod.io/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				sessionStorage.setItem("token", data.token);
				sessionStorage.setItem("userId", data.userId);
				setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});

		// setRedirect(true);
	};

	return (
		<div className="container contenido">
			<div className="content">
				<form onSubmit={e => handleSubmit(e)}>
					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="example@gmail.com"
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							onChange={e => setPass(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Iniciar Sesión
					</button>
				</form>
				<div className="registrarse">
					<h2>Nuevo por aqui?</h2>
					<p>Puedes registrarte aqui</p>
					<Link to="/registrarse">
						<button className="btn btn-block btn-primary">Registrarse</button>
					</Link>
				</div>
			</div>
			{redirect ? <Redirect to="/" /> : ""}
		</div>
	);
};

export default Ingresar;
