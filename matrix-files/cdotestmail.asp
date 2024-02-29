<% Import Namespace="System.Web.Mail" %>

 

<script language="VBSCRIPT" runat="Server">

 

Dim msg as New MailMessage()

 

msg.To = "test@matrix-solutions.net"

msg.From = "test@matrix-solutions.net"

msg.Subject = "test"

'msg.BodyFormat = MailFormat.Html

msg.BodyFormat = MailFormat.Text

msg.Body = "hi"

 

 

msg.Fields.Add("http://schemas.microsoft.com/cdo/configuration/smtpserver", "matrix-solutions.net")

msg.Fields.Add("http://schemas.microsoft.com/cdo/configuration/smtpserverport", 25)

msg.Fields.Add("http://schemas.microsoft.com/cdo/configuration/sendusing", 2) '2 to send using SMTP over the network

 

 

msg.Fields.Add("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate", "1") 'basic authentication

msg.Fields.Add("http://schemas.microsoft.com/cdo/configuration/sendusername", "email@domain.com") 'set your username here

msg.Fields.Add("http://schemas.microsoft.com/cdo/configuration/sendpassword", "123456") 'set your password here

 

 

' SmtpMail.SmtpServer = "mail.matrix-solutions.net"

 

SmtpMail.Send(msg)

msg = Nothing

lblMsg.Text = "An Email has been Sent"

 

End Sub

</script>

 

 

<form runat=server>

<asp:Label id=lblMsg runat=Server /> </form>