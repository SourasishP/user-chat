import React from 'react';
import HomePage from './Files/Home';
import Privacy from './Files/Privacy';
import Terms from './Files/Terms';
import Register from './Login/register-user';
import Login from './Login/Login-user';
import LoginHome from './Login/Login-home';
import Forgot from './Login/Forgot';
import NameEntry from './Login/name-entry';
import Chat from './Chat/Chat';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
	return(
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />}/>
				<Route path="/Privacy" element={<Privacy />}/>
				<Route path="/Terms" element={<Terms />}/>
				<Route path="/register" element={<Register />}/>
				<Route path="/login" element={<Login />}/>
				<Route path="/logged-home" element={<LoginHome />}/>
				<Route path="/forgot" element={<Forgot />}/>
				<Route path="/name-entry" element={<NameEntry />}/>
				<Route path="/Chat" element={<Chat />}/>
			</Routes>
		</Router>
	)
}

export default App;
