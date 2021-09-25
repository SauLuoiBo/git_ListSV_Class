import React from "react";

import StudentCard from "../StudentCard/StudentCard";
import './listStudent.css'

class ListStudent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { students: JSON.parse(localStorage.getItem("student")) };
	}
	componentDidMount() {
		// this.state.students = JSON.parse(localStorage.getItem("student"));
        console.log(this.state.students)
        console.log(this.state.students[0])
	}
	del = (id) => {
		const newStudents = this.state.students.filter(sv => sv.id !== id)
			console.log(id)
			localStorage.setItem("student", JSON.stringify(newStudents));
		
			console.log(newStudents)
			window.location.reload()
	}

	render() {
		// localStorage.setItem("student", JSON.stringify(data));
		// this.state.students = JSON.parse(localStorage.getItem('student'))
		// const renderStudentList = students.map((data) => {
		//     return <StudentCard del={del} student={data} key={data.id} />;
		//   });

		// const del = (id) => {
		// 	const newStudents = this.state.students.filter(sv => sv.id !== id)
		// 	console.log(id)
		// 	localStorage.setItem("student", JSON.stringify(newStudents));
		
		// 	console.log(newStudents)
		// 	window.location.reload()
		//   }

		console.log(this.state.students);
		const baser = {
			id: "123",
			ten: "Tên",
			email: "Email",
			address: "Địa chỉ",
			age: "Tuổi",
			classer: "Lớp",
			year: "Khóa",
		};
        // console.log(this.state.students[0])
        const ba = this.state.students[0]
        console.log(ba)

		return (
			<>
				<div className="wrapper_List">
                    <div className='heading'>Danh sách sinh viên</div>
					<StudentCard student={baser}  />
                    {this.state.students.map((data, index) => 
                        <StudentCard key={index} student={data} delete={this.del} />
                    
                    )}
				
				</div>
			</>
		);
	}
}

export default ListStudent;
