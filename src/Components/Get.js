import React, { useState,useEffect } from 'react'
import fire from  'sweetalert2'
import styled from 'styled-components';

const  Get =() => {


    const [userID, setuserID] = useState(0);
    const [user, setUser] = useState({})
    const [approve, setapprove] = useState(false);
    const [notify, setNotify] = useState(0);



useEffect(() => {
    if(userID.length > 0 )
            setapprove(true)
    else
           setapprove(false);

},[notify])



let res;
const addUser = (e) => {
    e.preventDefault();
    if(approve){
        fetch(`https://jsonplaceholder.typicode.com/posts/${userID}`)
          .then((response) => {
                res = response.status
              return  response.json();
        }) 
        .then((json) => {
          
          
                if(res === 201 || res === 200)
                    setUser(json);    
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
                    <tbody>
                    <tr>
                        <td>
                        <input onChange={(e) => { setuserID(e.target.value); setNotify(notify+1) }}  value={userID} placeholder="User ID"/>
                        </td>
                    </tr>
    
                    <tr>
                        <td>
                        <label>User ID: {user.userId}</label> 
                        </td>
                    </tr>
    
    
                    <tr>
                        <td>
                        <label>Title: {user.title}</label> 
                        </td>
                    </tr>

                    <tr>
                        <td>
                        <label>Post ID: {user.id}</label> 
                        </td>
                    </tr>



                    <tr>
                        <td>
                        <label>Body: {user.body}</label> 
                        </td>
                    </tr>


    
                    <tr>
                        <td>
                            <PostData   disabled={approve ? true: false} onClick={(e) => addUser(e)}>Get user</PostData>
                        </td>
                    </tr>
                    </tbody>
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


    label{
    margin: 10px;
    text-align:left;
    }
    
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
    

export default Get