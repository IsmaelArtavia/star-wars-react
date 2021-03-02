import React from "react";

const Registrarse = () => {
	return (
		<div>
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
						</div>
						<div className="mb-3">
							<label className="form-label">Username</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Password</label>
							<input type="password" className="form-control" id="exampleInputPassword1" />
						</div>
						<button type="submit" className="btn btn-primary">
							Registrarse
						</button>
					</form>
					{/* <div className="registrarse">
						<h2>Nuevo por aqui?</h2>
						<p>Puedes registrarte aqui</p>
						<Link to="/">
							<button className="btn btn-block btn-primary">Registrarse</button>
						</Link>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Registrarse;
