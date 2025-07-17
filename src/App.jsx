import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Notes from "./pages/Notes";
import NoteDetails from "./pages/NoteDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:id" element={<NoteDetails />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
