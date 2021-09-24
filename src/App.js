import "./App.css";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddStudentPage from "./pages/AddStudentPage";

import ListPage from "./pages/ListPage";

function App() {
  // localStorage.setItem('student', JSON.stringify(data));
	return (
		<div className="App">
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/" component={HomePage} />
            <Route exact path="/list" component={ListPage} />
            <Route exact path="/add" component={AddStudentPage} />
					</Switch>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
