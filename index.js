var form = document.getElementById("Login_form");
function sConsole(event) {
  event.preventDefault();
  var fname = document.form.name.value;
  var fmail = document.form.email.value;
  var fpass = document.form.pass.value;
  var frpass = document.form.rpass.value;
  var fgender = document.form.Gender.value;
  var fsub = document.form.subscription.value;
  var fmsg = document.form.msg.value;
  var int = new Array();
  var fint = document.getElementsByName("Interests");
  for (var x of fint) {
    if (x.checked) {
      fname;
      int.push(x.value);
    }
  }
  var atposition = fmail.indexOf("@");
  var dotposition = fmail.lastIndexOf(".");


    var data = new Object();
    data.name = fname;
    data.email = fmail;
    data.password = fpass;
    data.gender = fgender;
    data.interest = int;
    data.subscription = fsub;

  if (fname == null || fname == "" || fmail == null || fmail == "") {
    alert("Enter your name");
  } else if (fpass.length < 6 || frpass.length < 6) {
    alert("Password must be of 6 characters");
  } else if (fpass !== frpass) {
    alert("Password does not match");
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= fmail.length
  ) {
    alert("Please enter email address");
  } else if (fmsg == null || fmsg == "") {
    alert("please enter Address message");
  }else{
  
    console.log(data);
  }
  
}

form.addEventListener("submit", sConsole);
