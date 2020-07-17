// App.js

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const API_BASE = "https://rapi.ajmalaju.com/v1/file/read/"

function submitForm(contentType, data, setResponse) {
 axios({
 url: `${API_BASE}/file`,
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

 <table>
     <thead>
         <tr>
             <th> sensors</th>
             <th> mm_yyyy</th>
             <th> total</th>
             <th> count</th>
             <th> per</th>
             <th> dig </th>
             <th> fs </th>
             <th> sl </th>
         </tr>
     </thead>
     <tbody >
     {resp.map((x) => <tr >
       <td>{x["sensors"]}</td>
       <td>{x["mm_yyyy"]}</td>
       <td>{x["total"]}</td>
       <td>{x["count"]}</td>
       <td>{x["per"]}</td>
       <td>{x["dig"]}</td>
       <td>{x["fs"]}</td>
       <td>{x["sl"]}</td>
       </tr>  )}
     </tbody>
   </table>

 </div>
 );
}

export default App;
