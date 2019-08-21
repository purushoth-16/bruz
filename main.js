var mainApp={};
(function(){
   var uid=null;
    var firebase=app_fireBase;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          uid=user.id;
        }else{
            uid=null;
            window.location.replace("index.html");
            alert("thanks for slammy details");
        }
      });
      function logOut(){
          firebase.auth().signOut();
      }
      mainApp.logOut=logOut;
})()
var database=firebase.database();
function submit1(){
  alert("data saved sucessfull.........");
  var name1=document.getElementById("name").value;
  var name2=document.getElementById("fname").value;
  var name3=document.getElementById("pno").value;
  var name4=document.getElementById("bod").value;
  var name5=document.getElementById("frdname").value;
  var name6=document.getElementById("mzs").value;
  var name7=document.getElementById("msk").value;
  var name8=document.getElementById("mfc").value;
  var name9=document.getElementById("mffa").value;
  var name10=document.getElementById("mcof").value;
  var name11=document.getElementById("hm").value;
  var name12=document.getElementById("sm").value;
  var ref=database.ref('details');
  var data={
    name:name1,
    father :name2,
    phno:name3,
    BOD:name4,
    fname:name5,
    zodiac:name6,
    skill:name7,
    colour:name8,
    hero:name9,
    circlefrds:name10,
    happymov:name11,
    scaremov:name12

  };
  ref.push(data);
}