import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
//import uuid from "uuid"; REMOVE - only  used for static state
/* connect comes from react-redux and allows us to get state from redux into a
   react component.*/
import { connect } from "react-redux";
/* import getItems() from ItemActions in order to get the state from the reducer*/
import { getItems, deleteItem } from "./../actions/itemActions";
import PropTypes from "prop-types";
/*Create a DELETE_ITEM action in itemActiobs.js
  import deleteItems and add it to component props*/

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

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    //const { items } = this.state; //destructuring
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              // <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this, id)}
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
  { getItems, deleteItem } //add deleteItem action to props
)(ShoppingList);
