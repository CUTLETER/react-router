import C from "./C";
import D from "./D";

function B() {
  return(
    <>
      <h3>B 컴포넌트 - 자식 C, D</h3>
      <C />
      <D />
    </>
  )
}

export default B;