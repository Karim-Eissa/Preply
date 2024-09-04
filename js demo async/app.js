const getTodos = async ()=>{
    const response = await fetch("todoss.json")
    if(response.status !== 200){
        throw new Error('Could not fetch data');
    }
    const data = await response.json()
    return data;
}
console.log(1)
console.log(2)
getTodos().then((response)=>{
    console.log("Resolved", response)
}).catch((err)=>{
    console.log("Error", err.message)
})
console.log(3)
console.log(4)