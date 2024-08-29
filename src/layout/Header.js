import { Outlet } from 'react-router-dom';
import styled from './Header.module.css';

function Header() {
  return(
    <>
      <header className={styled.wrap}>
        <h3>헤더</h3>
        <ul>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
        </ul>
        <div>
          <button type="button">Home</button>
          <button type="button">Back</button>
        </div>
      </header>

      <section>
        <Outlet />
      </section>
    </>
  )
}

export default Header;