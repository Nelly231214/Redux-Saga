export const fetchData=async()=> {
    const data=await fetch("http://localhost:5000/people")
    return await data.json()
}
export const deleteData=async({payload:id})=> {
    console.log(id,789)
    const delData=await fetch(`http://localhost:5000/people/${id}`, {
        method: "DELETE"
      })
    return await delData.json()
}
