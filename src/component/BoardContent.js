import { useParams } from "react-router-dom";

function BoardContent() {

  const {num} = useParams(); /* App.js의 :num */
  
  return(
    <>
      <h3>글 상세</h3>
      {num}번 글입니다. (추후에 네트워크 통신 처리할 예정)
    </>
  )
}

export default BoardContent;