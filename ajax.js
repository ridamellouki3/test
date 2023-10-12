let req = new XMLHttpRequest() 
req.open("GET", "https://jsonplaceholder.typicode.com/todos/")
req.onreadystatechange=()=>{
    let resp
    console.log(req.readyState);
    if(req.readyState == 4 && req.status == 200){
        resp = JSON.parse(req.responseText)
    }
    console.log(resp)
}

req.send();