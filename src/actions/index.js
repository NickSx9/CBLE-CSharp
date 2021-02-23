export function selectPage(cliplist){
    console.log("you have selected : ", cliplist.LinkNumber);
    return {
        type: "PAGE_SELECTED",
        payload: cliplist
    }
};