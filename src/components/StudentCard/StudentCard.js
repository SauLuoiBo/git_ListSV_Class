import React from "react";
import "./studentCard.css";

class StudentCard extends React.Component {
	constructor(props) {
		super(props);
		// this.del = props.del(this)
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

	del = () => {
		console.log(this.state.student.id, 'delte')

		this.props.delete(this.state.student.id)
	}


	render() {
		console.log(this.state);

		const student = this.state.student


		return (
			<>
				<div className="wrapper_card">
					<p onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
						{student.ten}
					</p>
					<p>{student.age}</p>
					<p>{student.email}</p>
					<p>{student.address}</p>
					<p>{student.classer}</p>
					<div className="action">
						<div>{student.year}</div>
						<i onClick={()=>this.del()} className="fas fa-trash-alt red" />
					</div>
				</div>
				{this.state.isOpen ? (
					<div className="modalwrapper">
						<h1>Thông tin sinh viên</h1>
						<div >{student.ten}</div>
					</div>
				) : (
					""
				)}
			</>
		);
	}
}

export default StudentCard;
