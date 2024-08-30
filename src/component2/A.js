import {useContext, useRef} from 'react';
import UserContext from '../context/ContextAPI2';

function A() {
  const /* 객체 반환 */ {state, action}= useContext(UserContext); // 사용하고 싶은 ContextAPI를 넣어줌
  const idRef = useRef();
  const nameRef = useRef();

  let handleClick = () => {
    console.log(action); // action 안에는 setState가 들어가 있음
    action.setUser({id: idRef.current.value, name: nameRef.current.value});
  }

  return(
    <>
    <h3>A 컴포넌트</h3>
    <input type='text' name='id' ref={idRef}/>
    <input type='text' name='name' ref={nameRef}/>
    <button type='button' onClick={handleClick}>값 변경하기</button>

    {state.id}<br />
    {state.name}<br />
  </>
  )
}

export default A;