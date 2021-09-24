import "../../layout/layout.css";
import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="wrapper_Header">
					<Link to='/' className="logo">
						<i className="fas fa-address-card"></i>
						<h3>SauLuoi</h3>
					</Link>
					<Link to='/add'>Add Student</Link>
                    <Link to='/list'>List Student</Link>
				</div>
			</div>
		);
	}
}

export default Header;
