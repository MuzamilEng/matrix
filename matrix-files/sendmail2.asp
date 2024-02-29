<% @LANGUAGE="VBSCRIPT" CODEPAGE="1252"%>
<%option explicit%>
<%
'dim i
'for i=1 to request.Form.Count
'response.Write request.Form.Key(i)& "=" &request.Form.Item(i)&"<br>"
'next
'response.End
dim strBody
dim mymail
    
if IsValidEmail(request("email")) = "True" then
	strBody = ""
	strBody = strBody& "First name: "  &request("first_name")&vbCrlf
	strBody = strBody& "Surname: "  &request("last_name")&vbCrlf
	strBody = strBody& "Company: " &request("company")&vbCrlf
	strBody = strBody& "Job title: " &request("job_title")&vbCrlf 
	strBody = strBody& "Email address: " &request("email")&vbCrlf
	strBody = strBody& "Telephone number: " &request("tel")&vbCrlf
	strBody = strBody& "Your message: " &request("message")&vbCrlf
	
'response.Write strBody	
'response.End
    set mymail=CreateObject("CDO.Message")
	mymail.From = request("email")
	mymail.To = "smtp@matrix-solutions.net"
	'mymail.CC = "aamir@matrixpk.com"
	mymail.Subject ="Matrix Solutions - Enquiry Form"
	mymail.TextBody = strBody
	
	mymail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendusing")=2
    'Name or IP of remote SMTP server
	mymail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1 'basic (clear-text) authentication 
    mymail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/sendusername") ="smtp@matrix-solutions.net" 
	mymail.Configuration.Fields.Item ("http://schemas.microsoft.com/cdo/configuration/sendpassword") ="0Mj42xd!" 
	mymail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserver")="127.0.0.1"
    'Server port
    mymail.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserverport")=25 
    mymail.Configuration.Fields.Update
    On Error Resume Next
	
	mymail.Send()
	set mymail= nothing
	
	dim zerr
	If Err <> 0 Then
	    response.Write Err.Description& " - " &Err.Source
		'response.Write "<script language=javascript>alert('Error occured, please try later.');history.back();</script>"
	else
		response.Write "<script language=javascript>alert('Your email has been submitted successfully.');history.back();</script>"
	end if
	
    
else
	response.Write "<script language=javascript>alert('Please enter a valid email address.');history.back();</script>"
end if
%>
<%
Function IsValidEmail(Email)
	Dim ValidFlag,BadFlag,atCount,SpecialFlag,atLoop,atChr,tAry1,UserName,DomainName
	ValidFlag = False
	If (Email <> "") And (InStr(1, Email, "@") > 0) And (InStr(1, Email, ".") > 0) Then
		atCount = 0
		SpecialFlag = False
		For atLoop = 1 To Len(Email)
			atChr = Mid(Email, atLoop, 1)
			If atChr = "@" Then atCount = atCount + 1
			If (atChr >= Chr(32)) And (atChr <= Chr(44)) Then SpecialFlag = True
			If (atChr = Chr(47)) Or (atChr = Chr(96)) Or (atChr >= Chr(123)) Then SpecialFlag = True
			If (atChr >= Chr(58)) And (atChr <= Chr(63)) Then SpecialFlag = True
			If (atChr >= Chr(91)) And (atChr <= Chr(94)) Then SpecialFlag = True
		Next
		If (atCount = 1) And (SpecialFlag = False) Then
			BadFlag = False
			tAry1 = Split(Email, "@")
			UserName = tAry1(0)
			DomainName = tAry1(1)
			If (UserName = "") Or (DomainName = "") Then BadFlag = True
			If Mid(DomainName, 1, 1) = "." then BadFlag = True
			If Mid(DomainName, Len(DomainName), 1) = "." then BadFlag = True
			ValidFlag = True
		End If
	End If
	If BadFlag = True Then ValidFlag = False
	IsValidEmail = ValidFlag
End Function
%>