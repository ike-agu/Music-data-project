// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

// import { countUsers } from "./common.js";
// import { getMaxListeners } from "events";
import { getListenEvents, getUserIDs, getSong } from "./data.js";

// window.onload = function () {
//   document.querySelector("body").innerText = `There are ${countUsers()} users.`;
// };

//-----showing users, selecting one, and displaying how many events they have--------
const selectUser = document.getElementById("user-select");
const content = document.getElementById("content")

function populateUsers() {
  const allUsers = getUserIDs(); // I'm calling the function
  allUsers.forEach((id) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = id;
    selectUser.appendChild(option);
  });
}
populateUsers();

const message = document.getElementById("message");

message.textContent = "Please select a user. Thank you!";//initial default message
//Handles message to display when a user is selected.
selectUser.addEventListener("change", () => {
  const selectedId = selectUser.value;
  if (selectedId) {
    message.textContent = `You have selected User ${selectedId} `;
  }

  // content.textContent = "";
  const events = getListenEvents(selectedId) || [];
  const resultOfP = document.createElement("p");
  resultOfP.innerHTML = `<p>User ${selectedId} has ${events.length} listen events</p>`;
  content.appendChild(resultOfP);
});

//----users most listened songs(based on number of listens)----------

function getUserMostListenedSong(userId){
  const events = getListenEvents(userId)

  //account for when there are no song listened
  if(events.length === 0){
    document.getElementById("mostListenedSongs").textContent =
      "This user has no listened song";
    return;
  }

  //count listen per songs


  //find the song with the most listen

  //get the song details

  // display the results on the HTML page
}
