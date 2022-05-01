import { Container } from 'react-bootstrap'
import { Routes,Route } from "react-router-dom";
import { userContext } from './components/store/index'
import Home from "./pages/Home";
import Movie from "./pages/Movie";


function App() {
  return (
    <div className="App">
     <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
     </Routes>
    </div>
  );
}

export default App;
