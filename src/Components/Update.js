import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import fire  from 'sweetalert2'
var validator = require("email-validator");

const  Update = ()  => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userID, setuserID] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [approve, setapprove] = useState(false);
    const [notify, setNotify] = useState(0);
    
    
    useEffect(() => {
        if(name.length > 0 && email.length > 0 && phone.length > 0 && address.length > 0 && userID.length > 0)
                setapprove(true)
        else
               setapprove(false);
    
    },[notify])



    const updateUser = () => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${userID}`,{
            method: 'PUT',
            body: JSON.stringify({
              name: name ,
              email: email,
              address: address,
              phone:phone,
              userId: userID,
            }),
        }).then((respones) => {
            if(respones.status === 200)
                fire.fire({title:'User Updated',text:'ok',icon:'success'})
            else
               fire.fire({title:'No User Updated',text:'user id not found ! ',icon:'info'})

        })
    }


    
const handlePhonenumber = (e,n) => {
    const value = e.target.value.replace(/\D/g, "");
    if(!value.toString().startsWith("A-Z")){

        if(n === 1)
          setPhone(value);
        else
           setuserID(value);

       setNotify(+1)
    }
    else{
        if(n === 1)
          setPhone('');
        else
           userID('');
    }
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

    return (<Components>
            <div>
                <table>


                     <tr>
                        <td>
                           <label>Enter User to be Update</label> 
                        </td>
                      </tr>


                <tr>
                    <td>
                    <input onChange={(e) => handlePhonenumber(e,2)}  value={userID} placeholder="User ID"/>
                    </td>
                </tr>


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
                    <input onChange={(e) => handlePhonenumber(e,1)}  value={phone} placeholder="Phone"/>
                    </td>
                </tr>


                <tr>
                    <td>
                    <input onChange={(e) => { setAddress(e.target.value);  setNotify(notify+1)} }  value={address} placeholder="Address" />
                    </td>
                </tr>    
                   
    
                    <tr>
                        <td>
                            <PostData   disabled={approve ? true: false} onClick={(e) => updateUser(e)}>Update User</PostData>
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
    width: 120px;
    height:20px;
    padding:10px;
    border: 0.5px solid #e6e6e6;
    color: ${(props => props.disabled ? '#fff': '#000')};
    background: ${(props => props.disabled ? 'blue': '#f9f9f9')};
    cursor:pointer;
    `;
    


export default Update