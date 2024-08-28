import { Link } from "react-router-dom";

function Home() {
  return(
    <div>
      <h1>Home 페이지</h1>
      {/* Link -> HTML의 <a href=''> 태그와 비슷함 */}
      <Link to='/user'>user 페이지로 이동</Link>{/* 라우터의 주소 */}
      <br />
      <Link to='/info'>info 페이지로 이동</Link>
    </div>
  )
}

export default Home;