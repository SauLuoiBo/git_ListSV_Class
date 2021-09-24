import React from 'react'

import { data } from '../data/data';

class HomePage extends React.Component {

	render() {
        localStorage.setItem('student', JSON.stringify(data));
        
		return (
			<div>
                Wellcome
			</div>
		);
	}
}

export default HomePage;
