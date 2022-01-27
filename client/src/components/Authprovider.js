// import React, {
// 	useState,
// 	useContext,
// 	useNavigate,
// 	useLocation,
// 	Navigate,
// } from 'react';
// import fakeAuthProvider from './fakeAuthProvider';

// const AuthContext = React.createContext();

// const AuthProvider = ({ children }) => {
// 	const [user, setUser] = useState(null);

// 	let signin = (newUser, callback) => {
// 		return fakeAuthProvider.signin(() => {
// 			setUser(newUser);
// 			callback();
// 		});
// 	};

// 	let signout = (callback) => {
// 		return fakeAuthProvider.signout(() => {
// 			setUser(null);
// 			callback();
// 		});
// 	};

// 	let value = { user, signin, signout };

// 	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// function useAuth() {
// 	return useContext(AuthContext);
// }

// function AuthStatus() {
// 	let auth = useAuth();
// 	let navigate = useNavigate();
// 	if (!auth.user) {
// 		return <p>You are not logged in.</p>;
// 	}

// 	return (
// 		<p>
// 			Welcome {auth.user}!{' '}
// 			<button
// 				onClick={() => {
// 					auth.signout(() => navigate('/'));
// 				}}
// 			>
// 				Sign out
// 			</button>
// 		</p>
// 	);
// }

// function RequireAuth({ children }) {
// 	let auth = useAuth();
// 	let location = useLocation();

// 	if (!auth.user) {
// 		// Redirect them to the /login page, but save the current location they were
// 		// trying to go to when they were redirected. This allows us to send them
// 		// along to that page after they login, which is a nicer user experience
// 		// than dropping them off on the home page.
// 		return <Navigate to="/login" state={{ from: location }} replace />;
// 	}

// 	return children;
// }

// module.exports = {AuthStatus, AuthContext, AuthProvider,RequireAuth};
