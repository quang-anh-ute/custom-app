import React, { useEffect, useState } from "react";

const useUser = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fectchUsers = async () => {
      fetch("http://127.0.0.1:8000/api/auth/login")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setUsers(data);
        });
    };
  }, []);
  return;
};

export default useUser;
