import { useSelector } from "react-redux";

import Table from "../UI/Table";
import Header from "./Header";

import ListItem from "./ListItem";

// Go to the Body file in the Container folder to map the list out.
const List = () => {
  const listsItem = useSelector((state) => state.lists.lists);

  return (
    <Table>
      <Header />
      {listsItem &&
        listsItem.map((list) => (
          <ListItem
            key={list.order}
            list={{
              category: list.category,
              date: list.date,
              order: list.order,
              person: list.person,
              detail: list.detail,
              amount: list.amount,
            }}
          />
        ))}
    </Table>
  );
};

export default List;
