import React from 'react';
import Title from './Title'

const USER_ROLE = [
  {
    id:"admin",
    name: "Admin"
  },
  {
    id:"user",
    name: "User"
  },
]

export default class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      role: "",
      result: {
        description: "",
        role: "",
      }
    }
  
  }

  onInputChange = (event) =>{
    const {name, value} = event.target;

    this.setState({
      [name]:value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const {name, description, role} = this.state;

    if(!name || name.trim().length <3){
      alert("Name is smaller than 3");
      return;
    }
     if(!description || description.trim().length <10){
      alert("Description is smaller than 10");
      return;
    }

    this.setState({
      result: {
        description,
        role
      }
    })

  }

  render () {
    const {name, description, role, result} = this.state;
    return (
      
      <div>
      <Title name = {name} />

      <h2>Campos</h2>
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Name</label>
          <input 
            name="name"
            value = {name}
            type = "text"
            onChange={this.onInputChange}
            placeholder="Your name" 
            />
        </div>
        <br/>
        <div>
          <label>Description</label>
          <textarea 
            name="description"
            value = {description}
            onChange={this.onInputChange}
            placeholder="Your description" 
            />
        </div>
        <br/>
        <div>
          <label>Role</label>
          <textarea
            name="role"
            value={role}
            onChange={this.onInputChange}
          />
        </div>
        <br/>
        <button type="submit">Submit</button>
        </form>
        <br/>
        //Si ha algo en el result renderizara el div que le decimos//
        {
          result
          &&
          <div>
            <p>{result.description}</p>
            <p>{
              result.role === 'admin'
              ?
              'El usuario es Administrador'
              :
              'El usuario es Usuario'
            }
            </p>
          </div>
        }
      </div>
      
    )
  }
}
