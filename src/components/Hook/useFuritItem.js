import { useEffect, useState } from "react";

const useFruitItem = () =>{
      const [fruits, setfruits] = useState([]);

      useEffect(() => {
        fetch("http://localhost:5000/fruitService")
          .then((res) => res.json())
          .then((data) => setfruits(data));
      }, []);
      return [fruits,setfruits]
}

export default useFruitItem;

