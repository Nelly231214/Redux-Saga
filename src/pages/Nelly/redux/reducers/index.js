import { combineReducers } from "redux";
import getPeople from './users';
const reducer=combineReducers({
    getPeople,
})
export default reducer