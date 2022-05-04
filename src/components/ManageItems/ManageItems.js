
import useFruitItem from "../Hook/useFuritItem";
import Manageitem from '../Manageitem/Manageitem';
import './ManageItems.css'

const ManageItems = () => {
     const [fruits, setfruits] = useFruitItem();
    return (
      <div className="container">
        <h1 className="text-style">Our Food Strok</h1>
        <div className="row gy-5">
          {fruits.map((fruit) => (
            <Manageitem key={fruit._id} fruit={fruit}></Manageitem>
          ))}
        </div>
      </div>
    );
};

export default ManageItems;