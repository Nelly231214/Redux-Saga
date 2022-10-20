const initialState={
    people:[],
};
const getPeople=(state=initialState, {type,payload})=>{
    switch(type){
        case "SET_DATA":
            return {...state,people:payload}
            default:
                return state;
    }
}
export default getPeople;