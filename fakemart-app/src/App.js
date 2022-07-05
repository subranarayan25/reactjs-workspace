import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";


const Shopping = () => {
  return (
    <>
      <h1>SHOP PAGE</h1>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home /> } />
        <Route path="shop" element={<Shopping /> } />
      </Route>
    </Routes>
  );
};

export default App;
