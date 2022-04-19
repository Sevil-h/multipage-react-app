import { Route, Routes, Link, Outlet } from "react-router-dom";

function Welcome() {
	return (
		<section>
			<h1>Welcome Page</h1>
			{/* Nested element */}
			<Link to="new-user">New User</Link>
			<Outlet />
			{/* <Routes>
				<Route path="/new-user" element={<p>Welcome new user</p>}></Route>
			</Routes> */}
		</section>
	);
}

export default Welcome;
