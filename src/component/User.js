import { Link } from "react-router-dom";

function User() {
  return(
    <div>
      <h1>User 페이지</h1>
      <Link to='/'>home으로 이동</Link>
    </div>
  )
}

export default User;