import { listActions } from "./list-slice";
import { uiActions } from "./ui-slice";

// GET method
export const fetchListData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://runway-26bec-default-rtdb.firebaseio.com/lists.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch list data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const listData = await fetchData(); // รับ Data มาจาก fn fetchData ในไลน์7
      dispatch(
        listActions.receiveList({
          lists: listData.lists,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showResponse({
          status: "error",
          message: "Fetching list data failed!",
        })
      );
    }
  };
};

// PUT method
export const sendListData = (data) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showResponse({
        status: "pending",
        message: "Sending list data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://runway-26bec-default-rtdb.firebaseio.com/lists.json",
        {
          method: "PUT",
          body: JSON.stringify({
            lists: data.lists,
          }),
          headers: {
            'Content-Type' : 'application/json'
          },
        }
      );

      if (!response.ok) {
        throw new Error("Could not send list data!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showResponse({
          status: "success",
          message: "Send list data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showResponse({
          status: "error",
          message: "Send list data failed!",
        })
      );
    }
  };
};
