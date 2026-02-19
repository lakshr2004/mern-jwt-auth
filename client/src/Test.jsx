import { useEffect } from "react";
import API from "./api";

function Test() {
  useEffect(() => {
    const testAPI = async () => {
      try {
        const res = await API.get("/profile");
        console.log(res.data);
      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    };

    testAPI();
  }, []);

  return <h2>Check console for response</h2>;
}

export default Test;
