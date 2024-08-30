import { createContext, useState } from "react";

// 1. createContext()로 초기값 지정함
const UserContext = createContext({
  state : {id: '',name: ''},
  action : {
    setUser : () => {}
  }
})

// 2. Provider와 Consumer를 외부에서 쓸 수 있도록 생성함
const UserProvider = ({children}) => { // provider 사이의 컴포넌트들을 얻을 수 있음

// state 관리
const [user, setUser] = useState({id: ' aaa', name: 'bbb'});

// value는 하위로 내려주는 값이 됨
const value = {
  state : user,
  action : {setUser}
}

  return( // 객체 반환할 때는 ()로 묶어줌
    <UserContext.Provider value={/* 하위로 내리는 값 */value}>{children}</UserContext.Provider> // 얘는 provider를 호출하는 곳으로 반환됨
  )
}

const UserConsumer = UserContext.Consumer; // 컨슈머

// 컨슈머와 프로바이더 export
export {UserConsumer, UserProvider};

// 컨텍스트 객체 반환
export default UserContext;