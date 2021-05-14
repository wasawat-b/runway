import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "dataStorage",
  initialState: {
    lists: [],
    totalAmount: 0,
    changed: false,
    editOrder: "",
  },
  reducers: {
    receiveList(state, action) {
      state.lists = action.payload.lists; //รับ payload มาแค่ lists
    },

    addList(state, action) {
      const newList = action.payload; //รับ payload มาแค่ lists
      state.changed = true;

      state.lists.push({
        category: newList.category,
        date: newList.date,
        order: newList.order,
        person: newList.person,
        detail: newList.detail,
        amount: newList.amount,
        stawBig: newList.stawBig,
        stawSmall: newList.stawSmall,
        banaBig: newList.banaBig,
        banaSmall: newList.banaSmall,
        chocBig: newList.chocBig,
        chocSmall: newList.chocSmall,
      });
    },

    removeList(state, action) {
      const order = action.payload; //รับ payload มาเป็น order
      state.lists = state.lists.filter((list) => list.order !== order);
      state.changed = true;
    },

    receiveEditOrder(state, action) {
      state.editOrder = action.payload;
    },

    editList(state, action) {
      const list = action.payload; //รับ payload มาทั้ง list เลย
      const updatedList = state.lists.reduce(
        (prev, cur) =>
        cur.order === state.editOrder
            ? [...prev, list]
            : [...prev, cur],
        []
      );
      console.log(updatedList);
      state.lists = updatedList;
      state.changed = true;
    },
  },
});

export const listActions = listSlice.actions;
export default listSlice;
