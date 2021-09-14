import React from "react"
import $ from "jquery"



function Jsondata(){
const dataurl="https://jsonplaceholder.typicode.com/posts"
async function imgData(){
    const responce=await fetch(dataurl)
    const myData=await responce.json()

    let dataImg="";
    $.each(myData,function(key,value){
        dataImg+='<div class="cardg">';
        $.each(value,function(ke,va){
            dataImg+=''+ke+':'+va+"<br>"
        })
        dataImg+=' </div>'

    })
    document.getElementById("Elementdata").innerHTML=dataImg;
}
imgData()
return(
    <div id="Elementdata"></div>
)

}


export default Jsondata