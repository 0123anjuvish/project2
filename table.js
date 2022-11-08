let allStu = document.querySelector(".all");
let failStu = document.querySelector(".fail");
let passStu = document.querySelector(".pass");
let avgStu = document.querySelector(".avg");
let topperStu = document.querySelector(".topper");
const res1 = async()=>{
const response = await fetch("./mockapi.js");
console.log(response);
const res2 = await response.json();
// console.log(res2 ,"anju");
return res2;
}
function result(){
    res1().then((data)=>{
        var table = document.querySelector("table");
        table.classList.add("T1");
        data.student.forEach((element)=>{
            var rw = document.createElement("tr");
            var data1 = document.createElement("td");
            var data2 = document.createElement("td");
            data1.innerHTML = element.RollNo;
            data2.innerHTML = element.Marks;
            rw.appendChild(data1);
            rw.appendChild(data2);
            table.appendChild(rw);
        });
    });
   
}
function result1(){
    res1().then((data)=>{
        let allTable1 = document.querySelector(".T1");
        console.log(allTable1,"anju");
        allTable1.innerHTML="";
        var table=document.querySelector("table");
        data.student.forEach((element)=>{
            var rw = document.createElement("tr");
            var data1 = document.createElement("td");
            var data2 = document.createElement("td");
            if(element.Marks==30){
                data1.innerHTML = element.RollNo;
                data2.innerHTML = element.Marks;
            rw.appendChild(data1);
            rw.appendChild(data2);
            table.appendChild(rw);
            }
        });
    });
    // failStu.classList.add("pointer-none");
}
function result2(){
    res1().then((data)=>{
        let allTable2 = document.querySelector(".T1");
        allTable2.innerHTML="";
        var table=document.querySelector("table");
        data.student.forEach((element)=>{
            var rw = document.createElement("tr");
            var data1 = document.createElement("td");
            var data2 = document.createElement("td");
            if(element.Marks==50){
                data1.innerHTML = element.RollNo;
                data2.innerHTML = element.Marks;
            rw.appendChild(data1);
            rw.appendChild(data2);
            table.appendChild(rw);
    }
});
 });
//  passStu.classList.add("pointer-none");
}
function result3(){
    res1().then((data)=>{
        let allTable3 = document.querySelector(".T1");
        allTable3.innerHTML="";
        var table=document.querySelector("table");
        data.student.forEach((element)=>{
            var rw = document.createElement("tr");
            var data1 = document.createElement("td");
            var data2 = document.createElement("td");
            if(element.Marks==70){
                data1.innerHTML = element.RollNo;
                data2.innerHTML = element.Marks;
            rw.appendChild(data1);
            rw.appendChild(data2);
            table.appendChild(rw);
    }
});
 });
//  avgStu.classList.add("pointer-none");
}
function result4(){
    res1().then((data)=>{
        let allTable4 = document.querySelector(".T1");
        allTable4.innerHTML="";
        var table=document.querySelector("table");
        data.student.forEach((element)=>{
            var rw = document.createElement("tr");
            var data1 = document.createElement("td");
            var data2 = document.createElement("td");
            if(element.Marks==90){
                data1.innerHTML = element.RollNo;
                data2.innerHTML = element.Marks;
            rw.appendChild(data1);
            rw.appendChild(data2);
            table.appendChild(rw);
    }
});
 });
//  topperStu.classList.add("pointer-none");
}