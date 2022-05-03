import React from "react";

class ArrayTest extends React.Component{

    render(){
        const sample = ["a", "b", "c", "d", "e"];

        /* sample.push("g"); //배열의 마지막에 데이터 추가

        sample.pop(); //무조건 마지막 데이터 삭제

        sample.splice(1,2); //배열의 1번 인덱스부터 2개 삭제 */

        //const resultsample = sample.splice(1,2); //삭제된 데이터

        const resultsample = sample.filter(function(one){ return one !== "a"});
        //조건에 해당하지 않는 데이터만 가져옴 (삭제x)

        return(
            <div>
                <h3>샘플 = {sample}</h3>
                <h3>결과 = {resultsample}</h3>
            </div>
        );

        //<h3>샘플 = {sample}</h3> -> 삭제후 남은 데이터
    }
}

export default ArrayTest;