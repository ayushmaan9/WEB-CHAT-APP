
  var firebaseConfig = {
      apiKey: "AIzaSyAIvW2ntp9zUXKi3OJ_2VAz-0ET2fhHLHs",
      authDomain: "kwitter-web-1d29e.firebaseapp.com",
      databaseURL:"https://kwitter-web-1d29e-default-rtdb.firebaseio.com/",
      projectId: "kwitter-web-1d29e",
      storageBucket: "kwitter-web-1d29e.appspot.com",
      messagingSenderId: "16428154226",
      appId: "1:16428154226:web:2fb590de91e782616fb1eb",
      measurementId: "G-ETDYB8HXC8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("loginname");
  document.getElementById("b").innerHTML = "Welcome " + user_name + "!";
  function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;

      });});}
getData();
function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html"; }
function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); 
window.location = "index.html"; }