
  var firebaseConfig = {
    apiKey: "AIzaSyAQp5qwJyRLm-GSvTLCsVv6F7jDYPfd_4A",
    authDomain: "git-sample-d53e2.firebaseapp.com",
    databaseURL: "https://git-sample-d53e2.firebaseio.com",
    projectId: "git-sample-d53e2",
    storageBucket: "git-sample-d53e2.appspot.com",
    messagingSenderId: "527817017684",
    appId: "1:527817017684:web:c0cee16b223868e7bfa0c1",
    measurementId: "G-GP5J1MNBW9"
  };
  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const auth = firebase.auth();
 const db =firebase.firestore();
 var order =db.collection("order");
 var noti=[];
 var n1=0,n2=0;


 firebase.firestore().collection('product_info')
.onSnapshot(  async function(querySnapshot) {    
        querySnapshot.forEach(async function(doc) {

        noti[n1++]= await doc.data().name;
                        		console.log(noti);

             //count1++;
                     	           // console.log("main count",count1,c1);


                                  });
    })

  

firebase.firestore().collection("orders_info").where("status","==","Pending").onSnapshot(function (querySnapshot) {
	var count=0;
	querySnapshot.forEach(function(doc){
     count++;
	});
	console.log("hello");
	console.log(count);
	if(count>0)
	{
		document.getElementById("count").innerHTML=count;
	}
});




function signup() {
	//alert("hello");
	var cap =document.getElementById("captcha").value;
	var email=document.getElementById("email");
	var password= document.getElementById("password");
	console.log(email.value ,cap);
	console.log("ok");

  	
	if(cap == "#Gewissen")
	{
		const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
	promise.catch( e => alert(e.message) );

firebase.auth().onAuthStateChanged(function(user) {
	var loc=window.location.pathname;
	console.log(loc);
  if (user) {
    // User is signed in.
    // /streamly-admin/main.html

    if(loc!="/dist/main.html")
    window.location="./main.html";
}
});
}
else
{
	alert("invalid captcha");
}
}

function signin() {
	//alert("hello");
	console.log("works");
	  var email = document.getElementById("emailin");
  var password = document.getElementById("passwordin");
  console.log(password.value);
  
  const promise = firebase.auth().signInWithEmailAndPassword(email.value,password.value);
  promise.catch(e => alert(e.message));
 console.log(promise);
 
	//promise.catch( e => alert(e.message) );


}


                              
  function signout(){
  	console.log("signout");
  	auth.signOut();
  }
var test=1002;
  var it=[];
                 //var it =  fetchData12();

//console.log(it);


 //// retriving data 
 ////product_nameple 
 

//product info
//product





//drawchart(product_name,total_item);