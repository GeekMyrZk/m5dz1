import {Route, Routes} from "react-router-dom";

import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<h1>main page lol</h1>}/>
        <Route path='/posts' element={<Posts/>}></Route>
        <Route path='/createPost' element={<CreatePost/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
