import { UserTable } from "./Components/UserTable";
import {Post} from "./Components/Post";
import { Route,Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserTable/>} />
        <Route path="/Post" element={<Post/>} />
      </Routes>
    </>
  );
}
