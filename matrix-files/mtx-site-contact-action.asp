<% 
    str_FirstName = ""
    str_Email=""
    str_MobileNumber = ""
    str_MessageVal=""
   ' str_Budget=""
    str_Subject=""

    str_ReturnURL="index.html"

    if Request.Form("contctFName") <> "" Then
        str_FirstName = Request.Form("contctFName")
    end if   
    if Request.Form("contctEmail") <> "" Then
        str_Email = Request.Form("contctEmail")
   end if
       if Request.Form("contctMobileNo") <> "" Then
        str_MobileNumber = Request.Form("contctMobileNo")
   end if
       'if Request.Form("Budget") <> "" Then
       ' str_Budget = Request.Form("Budget")
  ' end if
     if Request.Form("Subject") <> "" Then
        str_Subject = Request.Form("Subject")
   end if
     if Request.Form("txt_msg") <> "" Then
        str_MessageVal = Request.Form("txt_msg")
   end if
   
'START: EMAIL TO ADMIN
set	myMail=CreateObject("CDO.Message")
    myMail.Subject="Matrix website contact request"
    myMail.From="aamir@matrix-solutions.net"
    'myMail.To= "umaynooth@dmpc.ie"
    myMail.To= "nasirkalas@gmail.com"
    'myMail.Cc= "I.Yunis@smallbackroom.co.uk"
     myMail.HtmlBody="<br/><br/>"  & Chr(13) & Chr(10) 

          If str_FirstName <> "" Then
                myMail.HtmlBody= myMail.HtmlBody & "<br/>"  & Chr(13) & Chr(10)
                myMail.HtmlBody= myMail.HtmlBody & "Name: "  & str_FirstName & Chr(13) & Chr(10)
          end if

          If str_Email <> "" Then
                myMail.HtmlBody= myMail.HtmlBody & "<br/>"  & Chr(13) & Chr(10) 
                myMail.HtmlBody= myMail.HtmlBody & "Email address: "  & str_Email & Chr(13) & Chr(10)
          end if

       If str_MobileNumber <> "" Then
                myMail.HtmlBody= myMail.HtmlBody & "<br/>"  & Chr(13) & Chr(10) 
                myMail.HtmlBody= myMail.HtmlBody & "Mobile: "  & str_MobileNumber & Chr(13) & Chr(10)
          end if

     ' If str_Budget <> "" Then
      '          myMail.HtmlBody= myMail.HtmlBody & "<br/>"  & Chr(13) & Chr(10) 
       '         myMail.HtmlBody= myMail.HtmlBody & "Budget: "  & str_Budget & Chr(13) & Chr(10)
        '  end if

     If str_Subject <> "" Then
                myMail.HtmlBody= myMail.HtmlBody & "<br/>"  & Chr(13) & Chr(10) 
                myMail.HtmlBody= myMail.HtmlBody & "Subject: "  & str_Subject & Chr(13) & Chr(10)
          end if

     If str_MessageVal <> "" Then
                myMail.HtmlBody= myMail.HtmlBody & "<br/>"  & Chr(13) & Chr(10) 
                myMail.HtmlBody= myMail.HtmlBody & "Message: "  & str_MessageVal & Chr(13) & Chr(10)
          end if

    myMail.HtmlBody= myMail.HtmlBody & Chr(13) & Chr(10) & Chr(13) & Chr(10) & Chr(13) & Chr(10) & _ 
    "<br/><br/><br/>"& Chr(13) & Chr(10) & _
    "Regards, <br/>"& Chr(13) & Chr(10) & _
    "Matrix Team<br/>" 
   
       myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2
        myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "mail.crswan.com"
        myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 0
        myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 587 
        myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpusessl") = false
        myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendusername") = "smtp@crswan.com"
        myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "$smtp@1234$"
        myMail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpconnectiontimeout") = 60 
        myMail.Configuration.Fields.Update 

    On Error Resume Next
    myMail.Send
    set myMail=nothing

'END: EMAIL TO ADMIN

    'Response.Write("<script>alert('Thank you for signup to our newsletter.');</script>")
    'Response.Write("<script>location.href='./?thankyou=1';</script>")
    'Response.Write("<script>$('.c-right').addClass('thankyou');</script>")
    Response.Write("<script>localStorage['submitform'] ='1';</script>")
    Response.Write("<script>location.href='./thankyou=1';</script>")
   'Response.Write("<script>$('.popupv').show();</script>")
   'Response.Write("<script>location.href='./contact.html?frm=1';</script>")

%>