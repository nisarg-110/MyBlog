import Header from "./component/Header";
import Login from "./component/Login";
import Post from "./component/Post";
import { Route, Routes } from "react-router-dom";
import Register from "./component/Register";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <main>
            <Header />
            <Post />
            <Post />
            <Post />
          </main>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
