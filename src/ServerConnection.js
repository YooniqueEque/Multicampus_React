import axios from "axios";
import { useState } from "react";

function ServerConnection (){
    //함수 선언 리액트 컴포넌트에서는 this.state 없음 -> 아래방법 사용
    const [result, setResult] = useState('');
    /* this.state={result :''}
    this.setResult(result수정할값) 과 같은 역할을하는 문장
     */

    //result가 뭔지 선언 - get 방식으로 호출
    //let result ='';
    
    
    /* axios.get("/helloreact")
    .then(function(response){
        setResult(JSON.stringify(response.data));
    }); */

    /* axios.get("/helloreactparam", {params : {id : "getid", pw : 1234}})
    .then(function(response){
        setResult(JSON.stringify(response.data));
        console.log(result);
    }); */

    axios.post("/helloreactparampost", {id : "postid", pw : 1234})
    .then(function(response){
        setResult(JSON.stringify(response.data));
        console.log(result);
    });

    /* axios.get("/userlist")
    .then(function(response){
        setResult(JSON.stringify(response.data));
        console.log(result);
    }); */

    return (<h1>통신시작 <br />{result} <br/> 통신종료</h1>);
}

export default ServerConnection;