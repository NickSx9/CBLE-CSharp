export default function (state={}, action) {
    switch(action.type){
        case "PAGE_SELECTED":
            return action.payload
        case "START_QUIZ":
            return action.payload
            default:
                break
    }
        state.LinkNumber = 1;
        state.PageVideo = "intro";
        state.BothThumbImage = "intro";
        state.PageTitle = "Introduction and installation";
        state.PageText = "Welcome to an introduction into C-Sharp Basic Programming. Once you have completed these tutorials, you will have a basic knowledge of how this programming language works. Variables, classes, and methods will all be covered in these tutorials. This first lesson will show you what you need to get started. Please click the 'Completed Lesson' button after completing this lesson.";
        state.download = "https://visualstudio.microsoft.com/downloads/";
    return state
}