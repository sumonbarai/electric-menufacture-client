import { useState } from "react";
import { useQuery } from "react-query";

const useAdmin = (user) => {
  const email = user?.email;

  const { isLoading, error, data } = useQuery("users", () =>
    fetch(`http://localhost:5000/users?email=${email}`).then((res) =>
      res.json()
    )
  );

  return [data];
};
export default useAdmin;
