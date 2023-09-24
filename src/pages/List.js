import React from "react";

//user함수는 userData를 받아서 email, name, phone을 보여줌
//화살표 함수는 return을 생략할 수 있음
//화살표 함수 대신 function을 써도 됨 그럴때 다음과 같이 함
// function User({userData}) {
//     return (
//         <tr>
//             <td>{userData.email}</td>
//             <td>{userData.name}</td>
//             <td>{userData.phone}</td>
//         </tr>
//     )
// }

// user에 userdata를 받으면 email, name, phone을 보여줌
const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.email}</td>
            <td>{userData.name}</td>
            <td>{userData.phone}</td>
        </tr>

    )
}

// List의 역할은 User를 여러개 만들어서 보여주는 역할
const List = () => {
    const users = [
        {email: 'user1@gmail.com', name: '홍길동', phone: '010-1111-2221'},
        {email: 'user2@gmail.com', name: '김철수', phone: '010-1111-2222'},
        {email: 'user3@gmail.com', name: '김삼양', phone: '010-1111-2223'},
        {email: 'user4@gmail.com', name: '박장야', phone: '010-1111-2224'}
    ];

    return (
        <table>
            <thead>
            <tr>
                <th>이메일</th>
                <th>이름</th>
                <th>전화번호</th>
            </tr>
            </thead>
            <tbody>
            {/* user값을 하나씩 꺼내서 User함수에 넣어줌 */}
            {users.map((user) => <User userData={user}/>)} 
            </tbody>
        </table>
    );
};

export default List;
// 전체 설명