import { React, Component } from "react";
import { Button } from "react-bootstrap";
import { getUnits, addUser, getUsers } from "../../services/adminService";
import { getFacturesOfUser,getAllUser } from "../../services/elbahjaService";

class Electric extends Component {
constructor(props){
  super(props)
  this.state = {
    users: [],
    factures:[]
    
  };
  this.ViewFactures = this.ViewFactures.bind(this);
}


  async getFactures(id){
    const { data: factures } = await getFacturesOfUser(1);
    this.setState({factures:factures})
    console.log(factures);
  }

  ViewFactures(id){
    this.props.history.push(`/facture-electricity/${id}`);
  }

  async getUsers() {
    const { data: users } = await getAllUser();
    this.setState({ users: users });
  }

  async componentDidMount() {
    await this.getUsers();
    console.log(this.state.users);

    await this.getFactures(1);
    console.log(this.state.factures);
  }


  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}>List of Users</h1>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Telephone</th>
      <th scope="col">Adress</th>
      <th scope="col">Matricule</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {    this.state.users.map(user =>(
      <tr>
      <td scope="row" >{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.tele}</td>
      <td>{user.address}</td>
      <td>{user.matricule}</td>
      <td><button style={{background:"green"}} onClick={ () => this.ViewFactures(user.id)}>View</button></td>
    </tr>
    ))}

  </tbody>
</table>

       
      </div>
    );
  }
}

export default Electric;