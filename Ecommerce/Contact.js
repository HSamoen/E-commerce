//javascript form validation

  function validateForm() {
    var a = document.forms["myForm"]["fname"].value;
    var b = document.forms["myForm"]["email"].value;
    var c = document.forms["myForm"]["comment"].value;
    if (a==null || a=="")
     {
      alert("Please fill out your name");
      return false;
     }
     if (b==null || b=="") {
        alert("Please fill out your email address");
        return false;
      }
    if (a == null || a == "", b == null || b == "", c == null || c == "") {
      alert("Please Fill All Required Field");
      return false;
    }
    else{
        alert("Submitted")
    }
  }