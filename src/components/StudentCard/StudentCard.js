import React from "react";
import'./studentCard.css'

class StudentCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            isOpen: false,
			student: {
				id: props.student.id,
				ten: props.student.ten,
				email: props.student.email,
				address: props.student.address,
				age: props.student.age,
				classer: props.student.classer,
				year: props.student.year,
			},
		};
	}
	render() {
        console.log(this.state)
		return (
            <>
			<div className="wrapper_card" onClick={()=>this.setState({isOpen: !this.state.isOpen})}>
				<p >{this.state.student.ten}</p>
                <p>{this.state.student.age}</p>
                <p>{this.state.student.email}</p>
                <p>{this.state.student.address}</p>
                <p>{this.state.student.classer}</p>
                <p>{this.state.student.year}</p>
			</div>
            {this.state.isOpen?<div className='modalwrapper'>
                <h1>Thông tin sinh viên</h1>
                <p>{this.state.student.ten}</p>
            </div> : ''}
           
            </>
		);
	}
}

export default StudentCard;
