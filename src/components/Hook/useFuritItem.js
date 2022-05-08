import { useEffect, useState } from "react";

const useFruitItem = () => {
  const [fruits, setfruits] = useState([]);

  useEffect(() => {
    fetch("https://secret-plateau-50974.herokuapp.com/fruitService")
      .then((res) => res.json())
      .then((data) => setfruits(data));
  }, []);
  return [fruits, setfruits];
};

export default useFruitItem;
