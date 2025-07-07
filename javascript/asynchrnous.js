
setInterval(()=>
{
    const time=new Date().toLocaleDateString();
    console.log(time);
},5000);

console.log("alarm going to sneeze every five minutes");



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

loginUser("senthil","1234")
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

handleLogin();
