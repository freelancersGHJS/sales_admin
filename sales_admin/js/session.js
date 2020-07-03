firebase.auth().onAuthStateChanged(function(user) {
	var loc=window.location.pathname;
	console.log(loc);
  if (user) {
    // User is signed in.
    // /streamly-admin/main.html
    console.log(loc);
    if(loc=="/distgi/index.html" || loc=="/distgi/")
    window.location="./main.html";
}
 else {
    // No user is signed in.
    //   /streamly-admin/register.html
    // /dist/index.html
    if(loc!="/distgi/index.html")
      window.location="index.html";
     

  }
});




