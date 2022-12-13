import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<div className="errorContainer">
			<p className="errorNumber">404</p>
			<p className="errorText"> Cette page que vous demandez n'existe pas.</p>
			<Link to="/" className="errorLinkHome">
				Faite un feelback à la page d’accueil
			</Link>
		</div>
	);
}
