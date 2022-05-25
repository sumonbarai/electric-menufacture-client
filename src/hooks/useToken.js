import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const email = user?.user?.email;
  const tokenEmail = { email: email };
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users?email=${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tokenEmail),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.result.acknowledged) {
            const assessToken = data.assessToken;
            localStorage.setItem("assessToken", assessToken);
            setToken(assessToken);
          }
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
