import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import FileUpload from "./components/FileUpload";
import Home from "./components/Home";
export default function App() {
  const [show, setLoading] = useState(true);
  const onchange = () => {
    setLoading(false);
  };
  return (
    <>
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <Link
                className="navbar-brand text-primary"
                onClick={onchange}
                to="/file"
              >
                New project
              </Link>
            </div>
          </nav>
        </div>
        {show ? <Home /> : null}
        <Routes>
          <Route path="/file" exact element={<FileUpload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
