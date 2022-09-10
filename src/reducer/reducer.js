import { type } from '@testing-library/user-event/dist/type';
import { v4 as uuidv4 } from 'uuid';
const initialState=[{
    tasks:{
        id:uuidv4(),
        description:"Audaaaaa,",
        isDone:"false,",
    }
}]
const reducer=(state=initialState,Action)=>{
switch (type.Action) {
    case "ADD-TODO":
        return (state)
    case "DELATE-TODO":
    default:
        return (state)
}
}
export default reducer