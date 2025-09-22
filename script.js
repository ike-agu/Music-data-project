// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

// import { countUsers } from "./common.js";
import { getUserIDs } from "./data.js";

// window.onload = function () {
//   document.querySelector("body").innerText = `There are ${countUsers()} users.`;
// };

const selectUser = document.getElementById("user-select");

function populateUsers(){
  const allUsers = getUserIDs();// I'm calling the function
  allUsers.forEach( (id) =>{
    const option = document.createElement("option")
    option.value = id,
    option.textContent = id;
    selectUser.appendChild(option)
  })
}
populateUsers();
