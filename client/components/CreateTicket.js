import React, { Component } from "react";
import { connect } from "react-redux";
import { addTicket } from "../store/thunks/ticketThunk";
import { Form, Button } from "react-bootstrap";
import { fetchProduct } from "../store/thunks/productThunks";

class CreateTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  onChange(ev) {
    const change = {};
    change[ev.target.name] = ev.target.value;
    console.log(ev.target.value);
    this.setState(change);
  }
  componentDidMount() {
    this.props.getProduct(Number(this.props.match.params.id));
  }

  onSave(ev) {
    ev.preventDefault();

    this.props.createTicket(this.state);
    // console.log(this.state, "creazione del ticket");
    // console.log(Number(this.props.match.params.id));
  }

  render() {
    const { title} = this.state;
    return (
      <Form
        style={{ width: "18rem" }}
        className="message-form"
        onSubmit={this.onSave}
      >
        <Form.Group controlId="formBasicTitle">
          <Form.Label> Title </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={title}
            onChange={this.onChange}
          />
        </Form.Group>
        {/* <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>ProductId</Form.Label>
          <Form.Control
            as="select"
            type="text"
            name="id"
            value={id}
            onChange={this.onChange}
          >
            <option>{Number(this.props.match.params.id)}</option>
          </Form.Control>
        </Form.Group> */}
        <Button variant="primary" type="submit" className="btn">
          Submit
        </Button>
      </Form>
    );
  }
}

const mapState = ({ productReducer }) => ({
  productReducer,
});

const mapDispatch = (dispatch, { history }) => {
  return {
    getProduct: (id) => dispatch(fetchProduct(id)),
    createTicket: (ticket) => dispatch(addTicket(ticket, { history })),
  };
};

export default connect(mapState, mapDispatch)(CreateTicket);
