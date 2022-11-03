const initialState={
    people:[],
};
const getPeople=(state=initialState, {type,payload})=>{
    switch(type){
        case "SET_DATA":
            return {...state,people:payload}
            case "DELETE_DATA":
                return {...state, people:state.people.filter((contact) => {
                    console.log(contact, payload)
                    return contact.id !== payload.id})}
                    
            default:
                return state;
    }
}
export default getPeople;