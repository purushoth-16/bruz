(function() {
  alert("Hiii frd...............");
  var ui = new firebaseui.auth.AuthUI(firebase.auth());

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {

        return true;
      },
      uiShown: function() {
    
        document.getElementById('loader').style.display = 'none';
      }
    },

    signInFlow: 'popup',
    signInSuccessUrl:'formpage.html',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      /*firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
     
      firebase.auth.PhoneAuthProvider.PROVIDER_ID*/
    ],
    tosUrl:'formpage.html',
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };
  
  ui.start('#firebaseui-auth-container', uiConfig);
})()
