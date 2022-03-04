import React, { useState } from 'react'
import styled from 'styled-components';
import fire  from 'sweetalert2'

const Delete =()  =>{


    const [userID, setuserID] = useState(0);
    const [approve, setapprove] = useState(false);



    const deleteUser = () => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${userID}`,{
            method:'DELETE',
        }).then((respones) => {
            if(respones.status === 200)
                fire.fire({title:'User Deleted',text:'ok',icon:'success'})
            else
                console.log("Nothing")
        })
    }


    const handleuserID = (e,n) => {
        const value = e.target.value.replace(/\D/g, "");

        if(!value.toString().startsWith("A-Z") && value.toString().length > 0 ){
               setuserID(value);
               setapprove(true)
        }else{
            setuserID('');
            setapprove(false)
        }
           
    } 


    return (
        <Components>
            <div>
                <table>


                     <tr>
                        <td>
                           <label>Enter User ID to be deleted</label> 
                        </td>
                      </tr>


                    <tr>
                        <td>
                        <input onChange={(e) =>handleuserID(e)}    value={userID}     placeholder="User ID"/>
                        </td>
                    </tr>
    
                   
    
                    <tr>
                        <td>
                            <PostData   disabled={approve ? true: false} onClick={(e) => deleteUser(e)}>Delete user</PostData>
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
    

export default Delete