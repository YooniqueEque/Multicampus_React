import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h1>메인화면</h1>
            <Link to="/boardlist"> 게시판이동</Link><br />
            <Link to="/board/1/공지사항"> 게시물1</Link><br />
            <Link to="/board/2/질문"> 게시물2</Link><br />
            <Link to="/board/3/요청"> 게시물3</Link><br />
            <Link to="/board?seq=100&title=test&writer=광자"> 게시물3</Link><br />
        </div>)
    ;
}

export default Main;