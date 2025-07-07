// time out

/*
console.log("login page");

setTimeout(()=>
{
   console.log("Welcome to shopify");
},2000)

console.log("Loading data");



setInterval(()=>
{
    const time=new Date().toLocaleDateString();
    console.log(time);
},1000000);

console.log("alarm going to ring every one hour");



// chaining promises

fetch("https://fakestoreapi.com")
.then(res=>res.json())
.then(data=>console.log(data.tittle,data.description.data.price))
.catch(err=>console.error(err));;;


*/


function loginUser(username,password)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            const userDB=
            {
                username:"senthil",
                password:"1234"
            };


            if(username===userDB.username && password===userDB.password)
            {
                resolve({message:"Login Sucessful",user:username});
            }
            else{
                reject({error:"Invalid credientials"});
            }
        },2000)
    })
}

loginUser("senthil",1234)
  .then(response=>
  {
    console.log(response.message + response.user)
  }
  )
  .catch(err=>
  {
    console.error(err.error)
  }
  )


  // aysnc await


async function handleLogin(params) {
    try{
    const response=await loginUser("admin","1234");
    console.log(response.message);
    console.log(response.user);
    }
    catch(err)
    {
        console.log(err.error);
    }

}
