import { Route, Routes } from "react-router-dom";
import Info from "./component/Info";
import User from "./component/User";
import Home from "./component/Home";
import Header from "./layout/header";
import Board from "./component/Board";
import BoardContent from "./component/BoardContent";

function App() {
  return (

    <Routes>
    <Route element={<Header />}>
      <Route path="/board" element={<Home />}/>
      <Route path="/info/:num" element={<Info />}/> {/* :num 가변값 */}
      <Route path="/user" element={<User />}/>
    </Route>

    /* 중첩 라우터 */
    <Route path="./board"> element={<Board />}>
      <Route path=":num" element={<BoardContent />}/>
    </Route>
  
    </Routes>
  );
}
export default App;
