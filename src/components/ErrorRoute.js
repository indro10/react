import React from "react";
import { useRouteError } from "react-router-dom";
export default function ErrorRoute() {
  const error = useRouteError();
  return <div>{JSON.stringify(error)}</div>;
}
