import axios from "axios";
import { useEffect, useRef, useState } from "react"; // named export 방식
import SockJS from 'sockjs-client'; // default 방식

function App() {
  // http => 커넥션 리스 프로토콜 (실시간 채팅 x)
  // websocket => 서버는 대기하고 있다가, 클라이언트 요청이 들어가면 연결하고
  //              지속적인 통신 채널을 만들어냄

  // http로 서버 통신하기
  // useEffect(() => {
  //   (async () => {
  //     const result = axios.post("http://localhost:8181/getEntity", {name: "이순신"})
  //     console.log(result);
  //   })();
  // }, []);

  // useEffect(() => {
  //   // 클라이언트 측에서 웹 소켓에 연결하려면 소켓 라이브러리가 필요함
  //   // 터미널에 해당 명령어 입력하기 npm install sockjs-client

  //   const socket = new SockJS("http://localhost:8181/api/chat");

  //   // 연결 성립이 되면 호출됨
  //   socket.onopen = () => {
  //     console.log('연결 성공');
  //   }

  //   socket.onclose = () => {
  //     console.log('(클라이언트 측에서) 연결 해제');
      
  //   }

  //   socket.onmessage = (e) => {
  //     console.log('수신 데이터 : '+e);
  //   }

  //   // 만약 연결이 해제된다면 socket.close(); 를 사용해서 반드시 닫아야 함

  // }, [])

  const [sock, setSock] = useState(null); // 연결된 소켓을 state로 관리함
  const inputRef = useRef(null); // userId 인풋
  const [msg, setMsg] = useState(''); // 메세지 인풋
  const [message, setMessage] = useState([]); // 수신 메세지를 state로 관리함

  const enterSocket = () => {

    const userId = inputRef.current.value; // userId의 value값

    if(userId === '') {
      alert('아이디 적으세요.');
      return;
    }

    if (sock == null) {

      const socket = new SockJS(`http://localhost:8181/api/chat?userId=${userId}&room=1`); // room 번호는 알아서 구현하기

      // 연결 성립이 되면 호출됨
      socket.onopen = () => {
        console.log('연결 성공');
      }

      socket.onclose = () => {
        console.log('(클라이언트 측에서) 연결 해제');
        
      }

      socket.onmessage = (e) => {
        //console.log('수신 데이터 : '+e);
        const newMessage = e.data;

        setMessage((prev) => {

          if(prev.length >= 30) { // 메세지 크기가 30이 넘으면
            prev.shift(); // 앞에서 하나씩 제거
          }

          console.log(prev);
          return [...prev, newMessage]; // 배열 합치기
        }); // setter 메소드의 매개변수에 함수를 넣으면 기존 값을 얻을 수 있음
      }
      
      setSock(socket); // state에 socket 객체 저장시킴
    }
  }

  const exitSocket = () => {
    if(sock !== null) {
      sock.close();
      setSock(null);
      alert('서버와의 연결이 종료되었습니다.');
    }
  }

  // 메세지 전송
  const sendMsg = (e) => {
    // 엔터를 칠 때와 값이 비어 있지 않을 때와 sock이 비어 있지 않을 때
    if(sock && msg && e.key === 'Enter') {
      sock.send(msg); // state로 관리되는 msg
      setMsg(''); // state 초기화
    }
  }

  return(
    <>
      <h3>리액트로 채팅 구현하기</h3>
      아이디 : <input type="text" ref={inputRef}/>
      <button type="button" onClick={enterSocket}>입장</button>
      <button type="button" onClick={exitSocket}>퇴장</button>
    
      <br />
      메세지 : <input type="text" value={msg} onChange={ e => setMsg(e.target.value)} onKeyUp={sendMsg}/>
      <div style={{border: "1px solid #ccc", width: '100%', height: '100%', overflow: 'auto'}}>
        {message.map((item, index) => <div key={index}>{item}</div>)}
      </div>
    </>
  )
}

export default App;