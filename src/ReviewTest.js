function A() {
    //변수, 함수 등을 정의
    const css1={color:"green", fontSize : '2em'}

    // function B(){alert(1);} //유명함수
    // const B = function(){alert(1);} //무명함수
    // const B = () => alert(1); //화살표함수
    
    
    //클릭이벤트 처리를 위한 무명함수
    // const clickHandler = function(){
    //     alert("버튼클릭");
    // } 
    
    //클릭이벤트 처리를 위한 화살표함수
    const clickHandler = () => {alert("버튼클릭");}

    const list = ["리스트1", "리스트2", "리스트3", "리스트4", "리스트5", "리스트6"];

    //반복문
    //const li_tag = list.map(function(one) { return <li>{one}</li>; } );
    const li_tag = list.map((one, index) => (<li key={index}>{one}</li>) );

    return (
        <div>
            <h1>결과입니다.</h1>
            <ul style={css1}>{li_tag}</ul>
            <button id="btn" onClick={clickHandler}><h3>클릭</h3></button>
        </div>
    );
}

export default A;