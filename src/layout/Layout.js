import React from "react";
import "./layout.css";
import Header from "../components/Header/Header";

class Layout extends React.Component {
	render() {
		return (
			<>
                <Header />
				<div className="container">{this.props.children}</div>
			</>
		);
	}
}

export default Layout;
