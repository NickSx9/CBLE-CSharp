export default function (state={}, action) {

    state.LinkNumber = 1;
    state.PageVideo = "intro";
    state.BothThumbImage = "intro";
    state.PageTitle = "Introduction and installation";
    state.PageText = "Welcome to an introduction into C-Sharp Basic Programming. Once you have completed this tutorial, you will have a basic knowledge of how this programming language works and have an understanding of the variables, classes and how to debug errors.  We will start this tutorial by showing you what programs you will need, and how to install them. Once completed, please click the 'Completed Lesson' button to keep tract of your progress.";

    switch(action.type){
        case "PAGE_SELECTED":
            return action.payload
            break;
    }
    return state
}