localStorage['submitform'] = '0';
if (location.href.indexOf("?thankyou=1") > -1) {
    localStorage['submitform'] = '1'
}


// JavaScript source code
function Submitform(form) {
    // document.getElementById("returnFile").value = window.location.href;
    var Name = document.forms["MyForm"]["contctFName"];
    var Email = document.forms["MyForm"]["contctEmail"];
    var PhoneNumber = document.forms["MyForm"]["contctMobileNo"];
    //var Budget = document.forms["MyForm"]["Budget"];
    var Subject = document.forms["MyForm"]["Subject"];
    var Message = document.forms["MyForm"]["txt_msg"];
    ////debugger;

    var err = "";
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Name.value == "") {
        err = "*Please provide name";
        document.getElementById("errormsg").innerHTML = err;
        Name.focus();
        return false;
    }
    if (Email.value == "") {
        err = "*Please provide email address";
        document.getElementById("errormsg").innerHTML = err;
        Email.focus();
        return false;
    }
    if (!re.test(Email.value)) {
        err = "*Please provide valid email address";
        document.getElementById("errormsg").innerHTML = err;
        Email.focus();
        return false;
    }
    ////if (PhoneNumber.value == "") {
    ////    err = "*Phone number filed empty";
    ////    document.getElementById("errormsg").innerHTML = err;
    ////    PhoneNumber.focus();
    ////    return false;
    ////}
    //if (Budget.value == "") {
    //    err = "*Budget filed empty";
    //    document.getElementById("errormsg").innerHTML = err;
    //    Budget.focus();
    //    return false;
    //}
    if (Subject.value == "") {
        err = "*Subject filed empty";
        document.getElementById("errormsg").innerHTML = err;
        Subject.focus();
        return false;
    }
    ////if (Message.value == "") {
    ////    err = "*Message filed empty";
    ////    document.getElementById("errormsg").innerHTML = err;
    ////    Message.focus();
    ////    return false;
    ////}
}

//function recaptchaCallback() {
//    //  $('#captchaBox').valid();

//        };
