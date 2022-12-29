import { React, Component } from "react";
import { Button,Modal,ProgressBar } from "react-bootstrap";
import { getUnits, addUser, getUsers } from "../../services/adminService";
import { getFacturesOfUser } from "../../services/elbahjaService";


class Electric extends Component {

  state = {
    id: this.props.match.params.id,
    users: [],
    factures:[],
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  

  async getFactures(id){
    const { data: factures } = await getFacturesOfUser(id);
    this.setState({factures:factures})
    console.log(factures);
  }

  async getUsers() {
    const { data: users } = await getUsers();
    this.setState({ users: users });
  }

  async componentDidMount() {

    await this.getFactures(this.state.id);
    console.log(this.state.factures);
  }




  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}>List of bills</h1>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Month</th>
                <th scope="col">Year</th>
                <th scope="col">State</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {    this.state.factures.map((facture) => facture.etat ==="non paye" ? (
                <tr>
                <th scope="row" >{facture.id}</th>
                <th>{facture.month}</th>
                <td>{facture.year}</td>
                <td><ProgressBar now={facture.numetat} variant="danger"/></td>
                <td>{facture.type}</td>
                <td><Button onClick={this.openModal}>to pay</Button></td>
                </tr>
                ): 
                <tr>
                <th scope="row" >{facture.id}</th>
                <th>{facture.month}</th>
                <td>{facture.year}</td>
                <td>paid</td>
                <td>{facture.type}</td>
                <td><Button onClick={this.openModal}>to pay</Button></td>
                </tr>
                )}

            </tbody>
        </table>


        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Pay Bill</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
            type="text"
            name="montant"
            placeholder="Enter the amount"
            id="month"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default Electric;