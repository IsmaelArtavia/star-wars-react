import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/home.scss";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

const Registrarse = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [username, setUsername] = useState("");
	const [redirect, setRedirect] = useState(false);
	let history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || pass === "" || username === "") {
			alert("correo, contraseña y username son requeridos");
		}
		console.log(email, username, pass);

		// FETCH
		const data = { email: email, password: pass };

		fetch("https://3000-fuchsia-finch-ukfmiw0c.ws-us03.gitpod.io/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});

		// setRedirect(true);
	};

	return (
		<div>
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
							<label className="form-label">Username</label>
							<input
								type="string"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								onChange={e => setUsername(e.target.value)}
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
						<div className="d-flex">
							<button type="submit" className="btn btn-primary">
								Registrarse
							</button>
						</div>
					</form>
					<div className="button">
						<button
							className="btn btn-danger"
							onClick={() => {
								history.goBack();
							}}>
							Come back
						</button>
					</div>
				</div>
			</div>
			{redirect ? <Redirect to="/login" /> : ""}
		</div>
	);
};

export default Registrarse;
