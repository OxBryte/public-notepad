import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Notes from "./pages/Notes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<Layout />}> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/notes" element={<Notes />} />

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
