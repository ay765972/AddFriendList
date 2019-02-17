import React, {Component} from 'react'
import './index.css';

class AddForm extends Component{
    state = {
        name:'',
        school:'',
        age:''
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.addFriend(this.state);
        this.setState({
            name:'',
            school:'',
            age:''
        })
    }
render(){
    return(
        <div className="box">
        <h2>Add New Friend</h2>
        <form>
            <div className="Inputbox">
                <input type="text" onChange={this.handleChange} name="name" value={this.state.name} />
                <label>Friend name</label>
            </div>
            <div className="Inputbox">
                <input type="text" onChange={this.handleChange} name="school" value={this.state.school} />
                <label>School</label>
            </div>
            <div className="Inputbox">
                    <input type="text" onChange={this.handleChange} name="age" value={this.state.age} />
                    <label>Age</label>
                </div>
                <button onClick={this.handleSubmit}>Add Friend</button>
        </form>
    </div>
       
    )
}
}

export default AddForm