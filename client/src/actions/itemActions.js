import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "./types";

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

/* call getItems() from within component (shopping-list)
   Reducer checks the type and acquires the state */
