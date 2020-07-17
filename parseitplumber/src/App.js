// App.js

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const API_BASE = "https://rapi.ajmalaju.com"


class Table extends React.Component {

 constructor(props){
 super(props);
 this.getHeader = this.getHeader.bind(this);
 this.getRowsData = this.getRowsData.bind(this);
 this.getKeys = this.getKeys.bind(this);
 }

 getKeys = function(){
  return Object.keys(this.props.data[0]);
  }

  getHeader = function(){
   var keys = this.getKeys();
   return keys.map((key, index)=>{
   return <th key={key}>{key.toUpperCase()}</th>
   })
   }


   getRowsData = function(){
 var items = this.props.data;
 var keys = this.getKeys();
 return items.map((row, index)=>{
 return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
 })
 }

 render() {
 return (
 <div>
 <table>
 <thead>
 <tr>{this.getHeader()}</tr>
 </thead>
 <tbody>
 {this.getRowsData()}
 </tbody>
 </table>
 </div>

 );
 }
}


const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
    return <td key={props.data[key]}>{props.data[key]}</td>
    })
   }

function submitForm(contentType, data, setResponse) {
 axios({
 url: `${API_BASE}/v1/file/read/`,
 method: 'POST',
 data: data,
 headers: {
 'Content-Type': contentType
 }
 }).then((response) => {
 setResponse(response.data);
 }).catch((error) => {
 setResponse("error");
 })
}

function App() {
 const [title, setTitle] = useState("");
 const [file, setFile] = useState(null);
 const [desc, setDesc] = useState("");
 const [resp, setResp] =useState(["",]);

 function uploadWithFormData(){
 const formData = new FormData();
 formData.append("req", file);


 submitForm("multipart/form-data", formData, (msg) => {
   console.log(msg.map(x => x["total"] ))
   setResp(msg);
 });
 }


 return (
 <div className="App">
 <h2>Upload Form</h2>
 <form>
 <label>
 File
 <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
 </label>



 <input type="button" value="Get Data" onClick={uploadWithFormData} />

 </form>
 <h1>response</h1>

<Table data={resp}/>

 </div>
 );
}

export default App;
