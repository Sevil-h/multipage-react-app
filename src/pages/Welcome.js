import { Route } from "react-router-dom";

function Welcome() {
	return (
		<section>
			<h1>Welcome Page</h1>
			{/* Nested element */}
			<Route path="/welcome/new-user">
				<p>Welcome new user</p>
			</Route>
		</section>
	);
}

export default Welcome;
