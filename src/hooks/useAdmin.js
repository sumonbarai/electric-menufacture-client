import { useEffect, useState } from "react";

const useAdmin = () => {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    fetch();
  }, []);
};
export default useAdmin;
