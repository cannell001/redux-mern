/*Reducer is where actual state is going to go. This is where we check actions
  There will be an actions file containing ADD_ITEM action, GET_ITEMS actions
  and which will dispatch to the Reducer, it can also send along a payload.

  If we fetch data from the server for a GET_ITEMS action we would dispatch
  to the Reducer and send the response we get from the server to the reducer,
  we would then add the data to the component.

  In the Reducer we need to evaluate the actions and set types for each.

  Create an actions folder and a file Types.js

  Move the initialState from shopping-list.js to here*/

import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "./../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Steak" },
    { id: uuid(), name: "Water" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case DELETE_ITEM:
      return {
        ...state,
        //items: state.items.filter(item => item.id !== id)
        //copied from shoppin-list
        items: state.items.filter(item => item.id !== action.payload)
        //change id to action.payload sent with dispatched action
        //modify onClick in shoppingList
      };
    default:
      return state;
  }
}
