import React from "react";

// const TitlePart = (props) => {
//     return(
//         <div>
//             <h3>제목 : {props.title}</h3>
//             <h3>출판사 : {props.pub}</h3>
//             <h3>저자 : {props.author} </h3>
//             <hr />
//         </div>
//     );
// }

// const ContentPart = (props) => {
//     return(
//         <div>
//             <h3>총 페이지 수 : {props.pages}</h3>
//             <h3>글 내용 : {props.contents}</h3>
//             <hr />
//         </div>
//     );
// }

// const Book = () => {
//     //책제목 출력 리액트 컴포넌트 + 책내용 출력 리액트 컴포넌트
//     const data = {title:"책제목", pub:"출판사", author:"저자", contents:"내용",pages:100};
    
//     return(
//         <div>
//             <TitlePart title={data.title} pub={data.pub} author={data.author}/>
//             <ContentPart contents={data.contents} pages={data.pages} />
//         </div>
//     );
// }

//클래스 선언

class TitlePart extends React.Component{
    //생성자
    // constructor(props){
    //     super(props);
    // }
    
    render(){
        return(
            <div>
                <h3>제목 : {this.props.title}</h3>
                <h3>출판사 : {this.props.pub}</h3>
                <h3>저자 : {this.props.author} </h3>
                <hr />
            </div>
        );
    }
}

class ContentPart extends React.Component{
    //생성자
    // constructor(props){
    //     super(props);
    // }
    
    render(){
        return(
            <div>
                <h3>총 페이지 수 : {this.props.pages}</h3>
                <h3>글 내용 : {this.props.contents}</h3>
                <hr />
            </div>
            );
    }
}

class Book extends React.Component{
    render(){
        const data = {title:"책제목", pub:"출판사", author:"저자", contents:"내용",pages:100};
        return(
            <div>
            <TitlePart title={data.title} pub={data.pub} author={data.author}/>
             <ContentPart contents={data.contents} pages={data.pages} />
         </div>
        )
    }
}
export default Book;