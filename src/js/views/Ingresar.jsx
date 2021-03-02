import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
const Ingresar = () => {
	return (
		<div className="container contenido">
			<div className="content">
				<form>
					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="example@gmail.com"
						/>
						<div id="emailHelp" className="form-text">
							We will never share your email with anyone else.
						</div>
					</div>
					<div className="mb-3">
						<label className="form-label">Password</label>
						<input type="password" className="form-control" id="exampleInputPassword1" />
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
		</div>
	);
};

export default Ingresar;
