import React from 'react';

class B extends React.Component{
    render(){
        const user = {"id":"아이디", password:1234, name:"이름", phone:"010-0000-0000", email:"이메일", address:"주소"};

        return (
            <div>
                <h1>테스트2</h1>
                <h3>{user.id}</h3>
                <h3>{user.password}</h3>
                <h3>{user.name}</h3>
                <h3>{user.phone}</h3>
                <h3>{user.email}</h3>
                <h3>{user.address}</h3>
            </div>
        );
    }
}

export default B;