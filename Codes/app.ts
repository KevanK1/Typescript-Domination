export{}
// Its a dummy export, its used  to make the file look like a module, cuse otherwise the Tyscript will make the variables of this file available gloablly to every "files", yes file, if they dont have any import and export
//  As inTypescript if any file is without  import and export, it will be available globally, so we need to make it look like a module, to prevent any conflict

let a = 123
// var a= true 
// Ts will show it as the error as the types is change and double declartion of the same variable
// But as Ts converts into Js, it will create a js file 
// Ts will show the error warnings but will also create the Js, hence in most cases the errors wont stop the compilation and can create mistakeed Js files
let TsConfig = "Its a file where we can do configuration of how the ts should do, like if i want to have a code where no function with abc name be created, etc";
// tsc --watch => Its will compile the code automatically whenever the code s updated with time and its affect as a result will be visible in the compiled Js file.
