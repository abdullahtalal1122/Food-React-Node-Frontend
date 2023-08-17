const fetchOrder = () => {
  return async function (dispatch) {
    const response = await fetch("http://localhost:8000/api/v1/order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.status === "success") {
      dispatch({ type: "order/setorder", payload: data.orders });
    }
  };
};

const setFilter = (filters) => {
  return { type: "order/setfilter", payload: filters };
};

export { fetchOrder, setFilter };
