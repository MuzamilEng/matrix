<% 
set objMessage = createobject("cdo.message") 
set objConfig = createobject("cdo.configuration") 
Set Flds = objConfig.Fields 

Flds.Item("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2 
Flds.Item("http://schemas.microsoft.com/cdo/configuration/smtpserver") ="mail.crswan.com" 
Flds.Item ("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 0 'basic (clear-text) authentication 
Flds.Item ("http://schemas.microsoft.com/cdo/configuration/sendusername") ="smtp@crswan.com" 
Flds.Item ("http://schemas.microsoft.com/cdo/configuration/sendpassword") ="$smtp@1234$" 

Flds.update 
Set objMessage.Configuration = objConfig 
objMessage.To = "supp0rt24x7@gmail.com" 
objMessage.From = "smtp@matrix-solutions.net" 
objMessage.Subject = "Contact form" 
objMessage.fields.update 
objMessage.HTMLBody = "This is a test sent from CDO using smtp authentication." 
objMessage.Send 
%>