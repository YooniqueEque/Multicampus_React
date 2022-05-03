import React from "react";


class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name : this.props.name,
            address : this.props.address
        }
    }

    render(){

        const greeting = () => {
            //alert(this.props.name + " 회원님은 " + this.props.address + " 지역에 삽니다.");//최초전달값
            alert(this.state.name + " 회원님은 " + this.state.address + " 지역에 삽니다.");//현재클래스 선언값
        }

        const finalChange = () =>{
            //this.setState({name:"오미선", address:"강원도 강릉시"});
            greeting();
            this.setState({name : "", address : ""});
        }

        const change = (e) => {
            //아이디 name, address인 입력태그의 값 받아옴
            //태그명, id, value 출력
            //console.log(e.target.tagName + " : " + e.target.id + " : " + e.target.value);
            this.setState({[e.target.id] : e.target.value});


        }
        
        return(
            <div>
                <button onClick={greeting}>인사</button> <br />
                <input type="text" id="name" onChange={change}/> <br/>
                <input type="text" id="address" onChange={change} /> <br />
                <button onClick= {finalChange}>정보변경</button>
            </div>
        );
    }
}

export default User;