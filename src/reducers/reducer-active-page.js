export default function (state={}, action) {
    console.log("PLUMP BUM"+action.type);
    switch(action.type){
        case "PAGE_SELECTED":
            return action.payload
        case "START_QUIZ":
            return action.payload
    }
        state.LinkNumber = 1;
        state.PageVideo = "intro";
        state.BothThumbImage = "intro";
        state.PageTitle = "Introduction and installation";
        state.PageText = "Welcome to an introduction into C-Sharp Basic Programming. Once you have completed this tutorial, you will have a basic knowledge of how this programming language works and have an understanding of the variables, classes and how to debug errors.  We will start this tutorial by showing you what programs you will need, and how to install them. Please click the 'Completed Lesson' button after  completing each section to keep track of your progress.";
        state.download = "https://visualstudio.microsoft.com/downloads/";
    return state
}