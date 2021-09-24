import React from "react";
import './addStudent.css'

class Addstudent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id:  '',
			ten: "",
			age: "",
			email: "",
			year: "",
			address: "",
			classer: "",
		};
	}


    // componentDidMount() {
    //     const ddd = new Date.getTime().toString()
    //     this.setState({id: ddd})
    // }

  
	render() {

        
		const Add = () => {
			// e.preventDefault();
			console.log(this.state);
			if (this.state.ten === "" || this.state.email === "") {
				alert("ALl the fields are mandatory!");
				return;
			}
			if (this.state.age === "" || this.state.address === "") {
				alert("ALl the fields are mandatory!");
				return;
			}
			if (this.state.classer === "" || this.state.year === "") {
				alert("ALl the fields are mandatory!");
				return;
			}

			const students = JSON.parse(localStorage.getItem("student"));
            console.log(students, 'dssd')

			students.push(this.state);
            console.log(students, 'dsshiiiid')

			localStorage.setItem("student", JSON.stringify(students));

            this.setState({
                id: '',
				ten: "",
				age: "",
				email: "",
				year: "",
				address: "",
				classer: "",
            })
			
		};

		return (
			<div className='wrapper_add'>
				<div className='heading'>Thêm sinh viên</div>
				<form className='form'>
					<label>Name</label>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={this.state.ten}
						onChange={(e) => this.setState({ten: e.target.value})}
					/>
					<label>Age</label>
					<input
						type="number"
						name="age"
						placeholder="Age"
						value={this.state.age}
						onChange={(e) => this.setState({age: e.target.value})}
					/>
					<label>Email</label>
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={this.state.email}
						onChange={(e) => this.setState({email: e.target.value})}
					/>
					<label>Khóa học</label>
					<input
						type="number"
						name="year"
						placeholder="Liên khóa"
						value={this.state.year}
						onChange={(e) => this.setState({year: e.target.value})}
					/>
					<label>Address</label>
					<input
						type="text"
						name="Địachỉ"
						placeholder="Địa chỉ"
						value={this.state.address}
						onChange={(e) => this.setState({address: e.target.value})}
					/>
					<label>Class</label>
					<input
						type="text"
						name="class"
						placeholder="Lớp"
						value={this.state.classer}
						onChange={(e) => this.setState({classer: e.target.value})}
					/>
					<div className='btn' onClick={() => Add()}>Add</div>
				</form>
			</div>
		);
	}
}

export default Addstudent