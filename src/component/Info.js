import { Link, useParams } from "react-router-dom";

function Info() {

  // 예시 데이터
  const data = {
    "1" : {id:1, name:"홍길동"},
    "2" : {id:2, name:"이순신"},
    "3" : {id:3, name:"유선화"}
  }

  // useParams 훅 - url 파라미터
  let param = useParams(); /* App.js의 :num 가변값 받아옴 */
  console.log(param);
  console.log(param.num); // num 값 찾아서 사용함

  const {id, name} = data[param.num];

  return(
    <div>
    <h1>Info 페이지</h1>
    <div>
      선택된 데이터는 {id}이고 {name}입니다
    </div>
    <Link to='/'>home으로 이동</Link>
    </div>
  )
}

export default Info;