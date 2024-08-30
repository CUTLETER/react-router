import { useState } from "react";
import ColorComponent from "./component2/ColorComponent";
import ColorContext from "./context/ContextAPI";

function App() {

  // provider = 값을 변경할 때 사용함
  // 컨텍스트 API의 변화를 알릴 때는 컨텍스트의 provider를 사용함
  // provider는 value props를 반드시 전달해야 함

  // 예시
  // 실습 - select 값이 변경되면 state를 변경해서 provider로 전달되는 색상을 바꿔보기
  const [color, setColor] = useState('red');

  return(
    <>
      <h3>컨텍스트 API 기술</h3>
      <ColorContext.Provider value={{color: color}}>
        <ColorComponent />
      </ColorContext.Provider>

      <select onChange={e => setColor(e.target.value)} value={color}>
        <option>red</option>
        <option>blue</option>
        <option>green</option>
      </select>

    </>
  )
}

export default App;