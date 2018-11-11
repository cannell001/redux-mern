import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "./types";

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

/* call getItems() from within component (shopping-list)
   Reducer checks the type and acquires the state */
export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
}; //Return this to reducer where we check the type - send a payload along with this dispatch
//since reducer needs to kno the id
//now add a case for DELETE_ITEM in reducer

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
