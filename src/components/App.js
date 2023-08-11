import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
} from 'react-router-dom';
import Navbar from './NavBar';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import GlobalStyles from './GlobalStyles';

const App = () => {
	return (
		<>
			<Router>
				<GlobalStyles />
				<Navbar />
				<Routes>
					<Route path='/' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/services' element={<Services />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
