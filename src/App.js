import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UsersTable from "./components/UsersTable";
import PostsTable from "./components/PostsTable";

const App = () => {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h2> React Router Example</h2>

        {/*  Bagian NAVIGASI */}
        <nav>
          <Link to="/" style={{ marginRight: 10 }}>Users</Link>
          <Link to="/posts">Posts</Link>
        </nav>

        <hr />

        {/*  Bagian ROUTES (Halaman yang ditampilkan) */}
        <Routes>
          <Route path="/" element={<UsersTable />} />
          <Route path="/posts" element={<PostsTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
