import { Link } from "react-router-dom";

function Home() {
  return(
    <div>
      <h1>Home 페이지</h1>
      {/* Link -> HTML의 <a href=''> 태그와 비슷함 */}
      <Link to='/user?name=홍길동&age=20'>user 페이지로 이동</Link>{/* 라우터의 주소 */} {/* 나중엔 고정 값 말고 {state} 값 넣어서 활용하면 됨 */}
      <br />
      <Link to='/info/1'>info1 페이지로 이동</Link> {/* App.js 의 :num */}
      <br />
      <Link to='/info/2'>info2 페이지로 이동</Link>
      <br />
      <Link to='/info/3'>info3 페이지로 이동</Link>
    </div>
  )
}

export default Home;