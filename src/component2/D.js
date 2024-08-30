import { useContext } from "react";
import UserContext from "../context/ContextAPI2";

function D() {

  const /* 객체 반환 */ {state, action}= useContext(UserContext); // 사용하고 싶은 ContextAPI를 넣어줌

  return(
    <>
      <h3>D 컴포넌트</h3>
      {state.id}<br />
      {state.name}<br />
    </>
  )
}

export default D;