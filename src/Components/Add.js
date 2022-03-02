import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import fire from 'sweetalert2'
var validator = require("email-validator");



const  Add = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [address, setAddress] = useState('');
const [approve, setapprove] = useState(false);
const [notify, setNotify] = useState(0);


useEffect(() => {
    if(name.length > 0 && email.length > 0 && phone.length > 0 && address.length > 0)
            setapprove(true)
    else
           setapprove(false);

},[notify])


const handlePhonenumber = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if(!value.toString().startsWith("A-Z")){
       setPhone(value);
       setNotify(+1)
    }
    else
       setPhone('')
} 



const handleEmail = (e) => {
 
    
    if(validator.validate(email)){
       setEmail(e.target.value);
       setNotify(+1)
    }
    else{
        setEmail('');
       alert("Pls enter a valid Email ! ")
    }
} 


let res;

const addUser = (e) => {
    e.preventDefault();
    if(approve){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name:name,
                email:email,
                phone:phone,
                address:address

            }),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => {
                res = response.status
              return  response.json();
        }) 
        .then((json) => {
                console.log(json)
                if(res === 201 || res === 200)
                    fire.fire({title:"Form submitted Successfully", text: `User added  ID: ${json.id}`, icon:'success'})
                else {
                   fire.fire({title:"Network error", text: 'Unknown error occurred', icon:'error'});
                   console.log(res);
                }
            })
        }else
          fire.fire({title:'Error submitting Form', text: 'Pls fill out all fields', icon:'error'})
}




return (
    <Components>
        <div>
            <table>
                <tr>
                    <td>
                    <input onChange={(e) => {setName(e.target.value); setNotify(notify+1)}}  value={name} placeholder="Name"/>
                    </td>
                </tr>

                <tr>
                    <td>
                    <input onChange={(e) => setEmail(e.target.value)}  onBlur={(e) => handleEmail(e)}  value={email} placeholder="Email" />
                    </td>
                </tr>


                <tr>
                    <td>
                    <input onChange={(e) => handlePhonenumber(e)}  value={phone} placeholder="Phone"/>
                    </td>
                </tr>


                <tr>
                    <td>
                    <input onChange={(e) => { setAddress(e.target.value);  setNotify(notify+1)} }  value={address} placeholder="Address" />
                    </td>
                </tr>


                <tr>
                    <td>
                        <PostData   disabled={approve ? true: false} onClick={(e) => addUser(e)}>Add user</PostData>
                    </td>
                </tr>

            </table>
           
        </div>
    </Components>
  )
}




const Components = styled.div`
background:#f5f5f5;
width:50%;
margin:auto;
display: flex;
align-items:center;
justify-content:center;
padding: 10px;
margin-top:100px;


tr td{
display:flex;
flex-flow:row;

input{
width: 80%;
margin:10px;
border-radius:5px;
padding: 15px;
border: 0.5px solid #e6e6e6
}
button{
border: none;
padding:10px;
margin-left: 30px;
margin-right:30px;
}
}


@media(max-width:768px){
width:90%;
overflow:hidden;
}
`;


const PostData = styled.div`
width: 70px;
height:20px;
padding:10px;
border: 0.5px solid #e6e6e6;
color: ${(props => props.disabled ? '#fff': '#000')};
background: ${(props => props.disabled ? 'blue': '#f9f9f9')};
cursor:pointer;



`;


export default Add