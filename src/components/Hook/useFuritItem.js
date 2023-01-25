import { useEffect, useState } from "react";

const useFruitItem = () => {
  const [fruits, setfruits] = useState([]);

  useEffect(() => {
    fetch("https://server-site-fruits.onrender.com/fruitService")
      .then((res) => res.json())
      .then((data) => setfruits(data));
  }, []);
  return [fruits, setfruits];
};

export default useFruitItem;
