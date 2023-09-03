import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Carsoul from "./components/Header/Carsoul";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import DetailsItem from "./components/Card/DetailsItem";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"
          element={
            <>
              <Carsoul />
              <Card />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/item-details/:id" element={<DetailsItem />} />

      </Routes>
    </Router>
  )
}

export default App