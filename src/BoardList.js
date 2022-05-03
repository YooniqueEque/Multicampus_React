import React from "react";

class BoardHeading extends React.Component{
    //테이블 제목행 - 번호 제목 작성자
    render(){
       return(
            <thead>
                <tr><th>번호</th><th>제목</th><th>작성자</th><th colSpan={2}>추가동작</th></tr>
            </thead>
        );
    }
}

class BoardRow extends React.Component{
    //게시물 갯수만큼 테이블 행 구성
    render(){
        //화살표 함수 : 자신을 포함한 클랙스 객체를 this로 여김
        //일반 함수 : this = 이벤트 발생객체
        const deleteBoard = (event) => {
            //alert("삭제");
            //삭제버튼 클릭한 게시물의 번호 받아서 (this.props.deleteBoard()) 호출 전달

            this.props.deleteBoard(event.target.id);

        }

        const updateBoard = (event) => {
            //alert("수정");
            //수정버튼 클릭한 게시물의 번호 받아서 전달
            const oneBoard = {seq : event.target.id, title:"수정제목", writer:"수정작성자"};
            this.props.updateBoard(oneBoard);
        }

        const tr_tag = this.props.board.map(function(one){
            //반복하면서 계속 리턴할 문장
            return (
                <tr key={one.seq}>
                    <td>{one.seq}</td><td>{one.title}</td><td>{one.writer}</td>
                    <td><button id={one.seq} onClick={updateBoard}>수정</button></td>
                    <td><button id={one.seq} onClick={deleteBoard}>삭제</button></td>
                </tr>
            );
        });

        //반복문이 종료 된 이후 최종적으로 리턴할 문장
        return (<tbody>{tr_tag}</tbody>);
    }
}

class BoardWriteForm extends React.Component{
    //props.addBoard 함수를 전달 받은 상태
    render(){
        //글쓰기 버튼 클릭하면 게시물 번호를 현재 게시물 갯수 +1 생성하여 alert로 제목, 작성자, 글번호 띄우기
        const oneboard = {seq : 0, title:"", writer:""};
        
        const change = (event) => {
            //if(event.target.id === "title") oneboard.title = event.target.value;
            //if(event.target.id === "writer") oneboard.writer = event.target.value;
            oneboard[event.target.id] = event.target.value;
        }

        const finalChange = () => {
            oneboard.seq = this.props.board.length +1;
            alert(oneboard.seq + " : " + oneboard.title + " : " + oneboard.writer);
            this.props.addBoard(oneboard);
        }

        return (
            <div>
                게시물 제목 : <input type="text" id="title" onChange={change}/> <br/>
                게시물 작성자 : <input type="text" id="writer" onChange={change}/> <br/>
                <button id="btn" onClick={finalChange} >글쓰기</button>
            </div>
        );
    }
}



//지역변수로 board 선언
/* class BoardList extends React.Component{
    render(){
        const board = [
            {seq:1, title:"제목1", writer:"작성자1"},
            {seq:2, title:"제목2", writer:"작성자2"},
            {seq:3, title:"제목3", writer:"작성자3"},
            {seq:4, title:"제목4", writer:"작성자4"},
            {seq:5, title:"제목5", writer:"작성자5"}
        ];

        return (<div><table><BoardHeading /><BoardRow board={board} />
        </table><hr /><BoardWriteForm board={board} /></div>);
    }
} */




// class BoardList extends React.Component{
/*         board = [
            {seq:1, title:"제목1", writer:"작성자1"},
            {seq:2, title:"제목2", writer:"작성자2"},
            {seq:3, title:"제목3", writer:"작성자3"},
            {seq:4, title:"제목4", writer:"작성자4"},
            {seq:5, title:"제목5", writer:"작성자5"}
        ];

        //BOARD 1개 게시물 추가 메소드 정의
        add=() => {
            this.board.push({seq:6, title:"제목6", writer:"작성자6"});
            console.log(this.board.length);
        }

    //화면 구성 1번 호출
    render(){

        return (<div><table><BoardHeading /><BoardRow board={this.board} />
        </table><hr /><button onClick={this.add}>글추가</button>
        <BoardWriteForm board={this.board} />
        </div>);
    }
} */




//state 사용 -> state 지정 변수값 변경 시마다 render 재호출
/* class BoardList extends React.Component{
    //1. state 변수 선언
    state ={
        board : [
        {seq:1, title:"제목1", writer:"작성자1"},
        {seq:2, title:"제목2", writer:"작성자2"},
        {seq:3, title:"제목3", writer:"작성자3"},
        {seq:4, title:"제목4", writer:"작성자4"},
        {seq:5, title:"제목5", writer:"작성자5"}
        ]
    };
    

    //BOARD 1개 게시물 추가 메소드 정의
    //3. state 내부 변수 stter - this.setState 메소드 호출 - 스프레드연산자
    add=() => {
        //this.board.push({seq:6, title:"제목6", writer:"작성자6"});

        const copyBoard = [...this.state.board, {seq:this.state.board.length +1, title:"제목", writer:"작성자"}];
        //...은 카피본을 만드는 스프레드 연산자
        // -> 기존 데이터 가져오고 , 뒤에 추가할 데이터
        this.setState({board : copyBoard});
        
        console.log(this.state.board.length);
    }

    //화면 구성 1번 호출
    //2. state 사용
    render(){

        return (<div><table><BoardHeading /><BoardRow board={this.state.board} />
        </table><hr /><button onClick={this.add}>글추가</button>
        <BoardWriteForm board={this.state.board} />
        </div>);
    }
} */



class BoardList extends React.Component{
    //1. state 변수 선언
    state ={
        board : [
        {seq:1, title:"제목1", writer:"작성자1"},
        {seq:2, title:"제목2", writer:"작성자2"},
        {seq:3, title:"제목3", writer:"작성자3"},
        {seq:4, title:"제목4", writer:"작성자4"},
        {seq:5, title:"제목5", writer:"작성자5"}
        ]
    };
    

    //BOARD 1개 게시물 추가 메소드 정의
    //3. state 내부 변수 stter - this.setState 메소드 호출 - 스프레드연산자
    addBoard=(newBoard) => {
        const copyBoard = [...this.state.board, newBoard];
        this.setState({board : copyBoard});
        
        console.log(this.state.board.length);
    }

    deleteBoard = (seq) => {
        //보드 배열에서 해당 게시물 삭제
        this.setState({ board : this.state.board.filter(function(one){return one.seq != seq})} ); //삭제한것만 빼고 가져와
    }

    updateBoard = (oneBoard) => {
        //board 배열에서 oneBoard.seq와 같은 데이터 찾아서 수정
        this.setState({ board :this.state.board.map( (one) => 
            one.seq == oneBoard.seq ? {...this.state.board, seq: oneBoard.seq , title : oneBoard.title, writer : oneBoard.writer} : one )} );
    }

    //화면 구성 1번 호출
    //2. state 사용
    render(){

        return (
        <div>
            <table><BoardHeading />
            <BoardRow board={this.state.board} deleteBoard={this.deleteBoard} updateBoard={this.updateBoard}/>
            </table>
            <hr />
            <BoardWriteForm board={this.state.board} addBoard={this.addBoard} />
        </div>);
    }
}

export default BoardList;