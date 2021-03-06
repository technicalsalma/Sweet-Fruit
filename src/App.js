
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import FruitDetail from './components/FruitDetail/FruitDetail';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageItems from './components/ManageItems/ManageItems';
import NotFound from './components/NotFound/NotFound';
import AddInventory from './components/Page/AddInventory/AddInventory';
import Register from './components/Register/Register'
import MyItems from './components/Page/MyItems/MyItems'
import RequireAuth from './components/RequireAuth/RequireAuth';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/fruit/:fruitId"
          element={
            <RequireAuth>
              <FruitDetail></FruitDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addinventory"
          element={
            <RequireAuth>
              <AddInventory></AddInventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
