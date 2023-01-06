import { useState } from "react";
import { useQuery } from "react-query";

const useAdmin = (user) => {
  const email = user?.email;

  const { isLoading, error, data } = useQuery("users", () =>
    fetch(
      `https://electric-manufacture-server.vercel.app/users?email=${email}`
    ).then((res) => res.json())
  );

  return [data];
};
export default useAdmin;
