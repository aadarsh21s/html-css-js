//To concanitate the arrays!
// let  a=[1,2,3,4,5]
// const b=[6,7,8,9,10]
// let c=[...a,...b]
// console.log(c)

const data=[
    {id:1,name:"sefina",age:25,gender:"female",hasPassout:true, occupation:undefined},
    {id:2,name:"Jalan",age:25,gender:"male",hasPassout:false, occupation:undefined},
    {id:3,name:"nirpa",age:25,gender:"male",hasPassout:true, occupation:"intern"},
    {id:4,name:"gaurav",age:23,gender:"male",hasPassout:false, occupation:"animator"},
    {id:5,name:"ishowr",age:100000,gender:"undefined",hasPassout:true, occupation:"be god"},
    {id:6,name:"sefina",age:25,gender:"female",hasPassout:true, occupation:undefined},
    {id:7,name:"bimal",age:23,gender:"male",hasPassout:true, occupation:"SSME"}
  
]

const response={
    status:200,
    message:"data fetched sucessfully",
    data:data
}

const getUserName=()=>{
    const APIStatus=response.status
    if(APIStatus===200){
        const result=response.data
        .filter((user)=>user.occupation)
        .map((user)=>user.name)
         return result 

    }
    else{

    }
   

}


console.log(getUserName());