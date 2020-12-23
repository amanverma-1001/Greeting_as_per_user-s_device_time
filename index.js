import react from "react";
import s from "react-dom";
import './index.css';
var d=new Date();
var greet;
var t=d.getHours();
var g="";
if(t<=11)
{
    greet="Good Morning";
    g={color:'yellow',
    backgroundColor:'white'};

}else if(t>11 && t<19)
{
    greet="Good afternoon";
    g={color:'orange',
       backgroundColor:'white'};
}
else{
    greet="Good night";
    g={color:'black',
    backgroundColor:'white'};
}
var dh={
    color:'green',
    backgroundColor:'white',
    marginTop:'20%',
    marginRight:'30%',
    marginLeft:'30%',
    borderRadius:'10px'
};
var styledate={
    backgroundColor:'#00BFFF',
    marginRight:'30%',
    marginLeft:'30%',
    borderRadius:'5px'
     };
s.render(
    <>
    <center>
    <h1 style={dh}>Hello sir,<span style={g}>{greet}</span></h1>
    
    <h3 style={styledate}>{`The date is ${d.toLocaleDateString()}`}</h3> 
    </center>
    </>,
    document.getElementById("root")
);