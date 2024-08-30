import ColorContext from "../context/ContextAPI";

function ColorComponent() {

  // consumer - 값을 받아서 쓸 때 사용함
  // 컨텍스트 API를 전달 받은 하위 컴포넌트에서는 consumer를 사용해서 값을 받을 수 있음
  // 컨슈머는 return으로 화면에 보여질 JSX 문법으로 작성할 수 있음

  return(

    <ColorContext.Consumer>
    {
      (value) => {
      return ( 
      <>
      <h3>하위 컴포넌트</h3>
      <div>
        값 : {value.color}
      </div>
      </>
      )  
      }
    }
    </ColorContext.Consumer>
  )
}

export default ColorComponent;