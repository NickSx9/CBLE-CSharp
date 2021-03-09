
export default function() {
    return [
        {
            LinkNumber: 1,
            SideBarTitle: "Installation",
            SideBarDescription: "This tutorial will show the user how to install Microsoft Visual Studio On their computer.",
            BothThumbImage: "intro",
            PageVideo: "intro",
            PageTitle: "Introduction and installation",
            PageText: "Welcome to an introduction into C-Sharp Basic Programming. Once you have completed this tutorial, you will have a basic knowledge of how this programming language works and have an understanding of the variables, classes and how to debug errors.  We will start this tutorial by showing you what programs you will need, and how to install them. Please click the 'Completed Lesson' button after  completing each section to keep track of your progress.",
            download: "https://visualstudio.microsoft.com/downloads/"
        },
        {
             LinkNumber: 2,
             SideBarTitle: "Hello World",
             SideBarDescription: "An introduction to the Visual Studio Software and how to run a C# Hello-World application.",
             BothThumbImage: "hello",
             PageVideo: "vid2",
             PageTitle: "Hello World Application",
             PageText: "By the end of this lesson, you will be able to setup and run a basic Hello-World application, have an understanding of writing content to the screen and how to record and use, user inputted data."
        },
        {
             LinkNumber: 3,
             SideBarTitle: "Variables",
             SideBarDescription: "In this tutorial we, will be working with different variable types.",
             BothThumbImage: "vari",
             PageVideo: "vid3",
             PageTitle: "Variables - Picking the Right One!",
             PageText: "This lesson, we will be looking at the different variable types, what data they can hold and how methods can be used to return those different types, and we will look at using break points to help with debugging code errors."
        },
        {
             LinkNumber: 4,
             SideBarTitle: "Classes",
             SideBarDescription: "A quick introduction into objects and how to call different classes.",
             BothThumbImage: "classes",
             PageVideo: "vid4",
             PageTitle: "C# Classes and How to Call Them!",
             PageText: "When the object is created, enough memory is allocated on the managed heap for that specific object, and the variable holds only a reference to the location of said object. Types on the managed heap require overhead both when they are allocated and when they are reclaimed by the automatic memory management functionality of the CLR, which is known as garbage collection. However, garbage collection is also highly optimized and in most scenarios, it does not create a performance issue. For more information about garbage collection, see Automatic memory management and garbage collection."
        },
        {
            LinkNumber: 5,
            SideBarTitle: "My First Application",
            SideBarDescription: "This lesson will use what you have learnt to build your first application",
            BothThumbImage: "first",
            PageVideo: "vid5",
            PageTitle: "Creation of a C# Console Application",
            PageText: "long winded bit about the project we are creating"

        }
    ]
}