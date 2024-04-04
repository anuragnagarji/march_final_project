let ucount=1;
let allEmployees=[];
let inputs=document.getElementsByTagName("input");
let err=document.getElementById("error");
let success=document.getElementById("success");
let tableDiv=document.getElementById("table");
const addEmployee=function(Ename="novalue",Eprofession="unemployee",E_Age=1){
    const employee={
        id:ucount++,
        name:Ename,
        profession:Eprofession,
        age:E_Age
    };
    allEmployees.push(employee);
}
const delEmployee=function(e){
    
    console.log(e.target.id);
    let employeeNo=Number(e.target.id.trim().slice(-1));
    console.log(employeeNo);
    let indexE=0;
    for(let i=0;i<allEmployees.length;i++){
        //console.log("hello="+allEmployees[i].id)
        if(employeeNo==Number(allEmployees[i].id)){
            indexE=i;
        }
    }
    console.log(indexE);
   let employeeDeleted=allEmployees[indexE].name;
    allEmployees.splice((indexE),1);
    console.log(allEmployees);
    let delPid="spd"+employeeNo;
    let delP=document.getElementById(delPid);
    tableDiv.removeChild(delP);
    if(allEmployees.length==0){
        document.getElementById("sp1").style.display="contents";
        success.style.display="none"
    }
 alert("successfully deleted Employee "+employeeDeleted);
}
let AddBtn=document.getElementById("addUser");
 
AddBtn.addEventListener("click",addingData);
 function addingData(){
    if((inputs[0].value.trim()!="")&&(inputs[1].value.trim()!="")&&(inputs[2].value.trim()!="")){
       console.log(inputs[0].value,inputs[1].value,inputs[2].value);
        addEmployee(inputs[0].value,inputs[1].value,inputs[2].value);
        err.style.display="none";
        success.style.display="contents";
        document.getElementById("sp1").style.display="none";
        let t = allEmployees[allEmployees.length-1]

          let str=`${t.id}.      Name:${t.name}   Profession:${t.profession}  Age:${t.age} `;
          console.log(str);
          let sp=document.createElement("p");
          let btn=document.createElement("button");
           btn.textContent="Delete";
           btn.className="DelBtn";
           btn.id="delBtn"+t.id;
           sp.id="spd"+t.id;
           sp.innerHTML=`<span class="data_span"> ${str} </span>`;
           sp.append(btn);
           tableDiv.append(sp);
           let delBtnArr=document.getElementsByClassName("DelBtn");
       for(let del of delBtnArr){
          del.addEventListener("click",delEmployee);
       }
     
    }
    else{
        console.log("hello emply");
        success.style.display="none"
        err.style.display="contents";
    }
 }
