export const fetchData=async()=> {
    const data=await fetch("http://localhost:5000/people")
    return await data.json()
}