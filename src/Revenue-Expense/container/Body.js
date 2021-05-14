import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListData, sendListData } from "../store/list-action";
import AddButton from "../AddNewList/AddButton";
import AddNewList from "../AddNewList/AddNewList";
import List from "../components/List";
import EditForm from "../Edit/EditForm";

function Body() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const showEdit = useSelector((state) => state.ui.showEdit);
  const showAddTable = useSelector((state) => state.ui.showAddTable);

  useEffect(() => {
    dispatch(fetchListData());
  }, [dispatch]);

  useEffect(() => {
    if (lists.changed) {
      dispatch(sendListData(lists));
    }
  }, [lists, dispatch]);

  return (
    <Fragment>
      {showEdit && <EditForm />}
      {showAddTable && <AddNewList />}
      <List />
      <div>
        <AddButton />
      </div>
    </Fragment>
  );
}

export default Body;
