import Header from "./component/Header";
import Login from "./component/Login";
import Post from "./component/Post";
import { Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import { UserContextProvider } from "./component/UserContext";
import CreatePost from "./component/CreatePost";

function App() {
  return (
    <UserContextProvider>
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
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
