import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const  Navigators =() => {

  const  history = useNavigate();
  
  
  function add(){
      history("/add")
  }

  function get(){
    history("/get")
}

function update(){
    history("/update")
}


function deletes(){
    history("/delete")
}
  return (
    <Components>
        <table>
            <tbody>
                <tr>
                    <td>
                        <button onClick={(e) => add()}>Add Product</button>
                        <button onClick={(e) => get()}>Get Product</button>
                        <button onClick={(e) => update()}>Update Product</button>
                        <button onClick={(e) => deletes()}>Delete Product</button>
                    </td>
                </tr>


            </tbody>
        </table>
        
    </Components>
  )
  
}


const Components = styled.div`
background:#f5f5f5;
width:80%;
margin:auto;
display: flex;
align-items:center;
justify-content:center;
padding: 10px;


tr td{
display:flex;
flex-flow:row;


button{
border: none;
padding:10px;
margin: 15px;
cursor:pointer;
}
}

@media(max-width:768px){
width: 100%;
overflow:hidden;
padding-top: 10px;
padding-left: 0px;
padding-right:0px;

tr td{

button{
border: none;
padding:5px;
margin: 5px;
}
}

}

`;

export default Navigators