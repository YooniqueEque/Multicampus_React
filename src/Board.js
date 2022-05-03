/* //test1
const Board = (props) => {
    return (
        <div>
            <h2>{props.seq}번 게시물</h2>
        </div>
    );
} */


//test2
/* import { useParams } from "react-router-dom";
const Board = () => {
    const {seq, title} = useParams();
    //url에 포함된 파라미터 정보를 제공
    //useParams 리턴결과(객체) 내부에 seq 변수만 가져와서 사용하겠다는 의미

    return (
        <div>
            <h2>{seq}번 게시물</h2>
            <h4>{title}</h4>
        </div>
    );
} */


//test3
import { useSearchParams } from "react-router-dom";
const Board = () => {
    const [searchParams] = useSearchParams();
    //제공 정보 가운데 이름이 searchParams인 변수만 가져옴

    const seq = searchParams.get("seq");
    const title = searchParams.get("title");
    const writer = searchParams.get("writer");

    return (
        <div>
            {seq}번 {title} 제목의 글을 {writer}님이 작성했습니다.
        </div>
    );
}

export default Board;