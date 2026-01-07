import { ADD_PERSON } from "../constant"
export const createAddPersonAction = (person) => {
    return { type: ADD_PERSON, data: person }
}