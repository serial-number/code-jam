import "./App.css";
import { Navbar, Footer } from "./components";
import { Home, Profile, Item, Create, Crypto } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemRelist from "./pages/itemRelist/itemRelist";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nft/:id" element={<Item />} />
          <Route path="nft/:id/relist" element={<ItemRelist />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Coinpage" element={<Crypto />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
