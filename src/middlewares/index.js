import { SET_ERROR } from "../actions/type";

export const logActions = store => next => actionInfo =>{
    console.log('dispatch', actionInfo);
    next(actionInfo);
}

export const reportError = store => next => actionInfo => {
    const {action} = actionInfo;
    if(action?.type === SET_ERROR){
        console.log(action.payload);
    }

    next(actionInfo);
}