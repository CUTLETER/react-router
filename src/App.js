import A from "./component2/A";
import B from "./component2/B";
import { UserProvider } from "./context/ContextAPI2";

function App() {

  // 1. 값을 공통으로 전달받는 상위 컴포넌트에 provider를 감싸기
  // 2. 값을 사용하는 컴포넌트에서는 userContext() 훅으로 Context를 받기

  

  return(
    <>
      <h3>Root 최상위 컴포넌트 - 자식 A, B</h3>

      {/* 
      루트에서 UserProvider로 감싸면
      {children}으로 들어가고
       */}
      <UserProvider> {/* 프로바이더 호출 */}
      <A />
      <B />
      </UserProvider>
    </>
  )
}

export default App;