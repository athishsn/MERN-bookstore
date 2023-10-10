import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Routes/Home/home";
import About from "./Routes/About/about";
import Header from "./components/header";
import Footer from "./components/footer";
import Book from "./Routes/Book/book";
import SingleBook from "./Routes/Book/singleBook";
import CreateBook from "./Routes/Book/createBook";
import EditBook from "./Routes/Book/editBook";

function App() {
  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/books" element={<Book />}/>
          <Route path="/books/:slug" element={<SingleBook />}/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/createbook" element={<CreateBook/>}/>
          <Route path="/editbook/:slug" element={<EditBook/>}></Route>
        </Routes>
        < Footer/>
      </Router>
    </>
  )
}

export default App
