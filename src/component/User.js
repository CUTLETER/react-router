import { Link, useLocation, useSearchParams } from "react-router-dom";

function User() {
  /* <Link to='/user?name=홍길동&age=20'> Home에서 보낸 값을 받기*/
  // 1.  useParam 훅 이용해서 받기
   const location = useLocation();
   console.log(location); // 여러 값이 담겨 있음
   const {search, pathname} = location; // 그중 name값과 age값 담겨 있는 태그만 뽑아내기
   console.log(search);
   console.log(pathname);
   
  // 2. useSearchParams 훅을 이용해서 받기
  const searchParam = useSearchParams();
  console.log(searchParam); // 객체랑 함수 담아져 있음
  const [obj, setObj] = useSearchParams(); // 객체와 함수 뽑아내기
  console.log(obj); // 값 얻어낼 수 있음
  console.log(setObj); // uri 값을 강제로 변경 가능함 - setObj의 쓰임새

  let name = obj.get("name"); // name 키 얻음 // request.getParameter("name")과 똑같음
  let age = obj.get("age"); // age 키 얻음
  console.log('전달된 파라미터 : '+name, age);
  
  let handleClick = (e) => {
    setObj({name: '이순신', age: 99}); // setObj의 쓰임새
  }

  return(
    <div>
      <h1>User 페이지</h1>
      <Link to='/'>home으로 이동</Link>
      <button type="button" onClick={handleClick}>uri 변경하기</button>
    </div>
  )
}

export default User;