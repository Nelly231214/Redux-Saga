export const getDataPeople=()=>({
    type: "FETCH_DATA"
});
export const setDataPeople=(payload)=>({
    type:"SET_DATA",
    payload,
});
export const deleteDataPeople=(payload)=> ({
    type:"DELETE_DATA",
    payload,
})