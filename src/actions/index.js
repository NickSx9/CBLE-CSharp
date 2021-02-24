export function selectPage(cliplist){
    console.log("you have selected : ", cliplist.LinkNumber);
    return {
        type: "PAGE_SELECTED",
        payload: cliplist
    }
};

export function startQuiz(stateChange){
    console.log("quiz is loading now", stateChange);
    return{
        type: "START_QUIZ",
        payload: stateChange
    }
};