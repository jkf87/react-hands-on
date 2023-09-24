import React, {useState} from 'react';

//디버깅해서 다시 함수 리팩토링
const Input2 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePhone = (e) => {
        setPhone(e.target.value);
    };

    return (
        <div>
        <div>
            <label>이름</label>
            <input type="name" value={name} onChange={onChangeName}/>
        </div>
        <div>
            <label>이메일</label>
            <input type="email" value={email} onChange={onChangeEmail}/>
        </div>
        <div>
            <label>전화번호</label>
            <input type="phone" value={phone} onChange={onChangePhone}/>
        </div>
        <p>이름: {name}</p>
        <p>이메일: {email}</p>
        <p>전화번호: {phone}</p>
    </div>
    );
};

export default Input2;

// const Input2 = () => {
//     const [textValue, setTextValue] = useState({
//         name: "",
//         email: "",
//         phone: "",
//     });

//     const {name, email, phone} = textValue;

//     const onChange = (e) => {
//         const value = e.target.value;
//         const id = e.target.id;
//         setInputs({
//             ...inputs, //기존의 input 객체를 복사한 뒤 그냥 복사가 아니라 기존의 내용을 그대로 두면서 원하는 값을 덮어씌울 수 있음 용어로 스프레드 문법이라고 함
//             [id]: value, //이렇게 해야 상태관리가 됨 id자리에 name, email, phone이 들어감, value는 입력한 값
//         });
//     };



//     return (
//         <div>
//         <div>
//             <label>이름</label>
//             <input type="name" id="name" value={name} onChange={onChange}/>    
//         </div>
//         <div>
//             <label>이메일</label>
//             <input type="email" id="email" value={email} onChange={onChange}/>    
//         </div>
//         <div>
//             <label>전화번호</label>
//             <input type="phone" id="phone" value={phone} onChange={onchange}/>    
//         </div>
//     </div>
//     );
// };

// export default Input2;




