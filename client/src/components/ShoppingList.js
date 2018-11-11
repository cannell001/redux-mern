import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
/* connect comes from react-redux and allows us to get state from redux into a
   react component.*/
import { connect } from "react-redux";
/* import getItems() from ItemActions in order to get the state from the reducer*/
import { getItems } from "./../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  // state = {
  //   items: [
  //     { id: uuid(), name: "Eggs" },
  //     { id: uuid(), name: "Milk" },
  //     { id: uuid(), name: "Steak" },
  //     { id: uuid(), name: "Water" }
  //   ]
  // }; REMOVE THIS STATE and use getItems() to acquire state from itemReducer

  //Run getItems() in a lifecycle method, this will dispatch the GET_ITEMS type
  //to the reducer which should then return the state and bring it into our component
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    //const { items } = this.state; //destructuring
    const { items } = this.props.item;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter Item");
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
              }));
            }
          }}
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              // <CSSTransition key={id} timeout={500} className="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    this.setState(state => ({
                      items: state.items.filter(item => item.id !== id)
                    }));
                  }}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
              // </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

//The process below maps the state to a component property

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item //rerences itemReducer
});

export default connect(
  mapStateToProps,
  { getItems }
)(ShoppingList);
