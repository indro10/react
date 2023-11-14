import React, { useReducer } from "react";
function reducer(state, action) {
  return { count: state.count + 1 };
}
export default function User() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return <div>User</div>;
}
