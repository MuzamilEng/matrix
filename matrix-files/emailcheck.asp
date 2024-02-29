<%@ Import Namespace="System.Net" %> 
<%@ Import Namespace="System.Net.Mail" %> 
 
<script language="C#" runat="server"> 
    protected void Page_Load(object sender, EventArgs e) 
    { 
       //create the mail message 
        MailMessage mail = new MailMessage(); 
 
        //set the addresses 
        mail.From = new MailAddress("smtp@matrix-solutions.net"); 
        mail.To.Add("supp0rt24x7@gmail.com"); 
        
        //set the content 
        mail.Subject = "This is a test email from C# script"; 
        mail.Body = "This is a test email from C# script"; 
        //send the message 
         SmtpClient smtp = new SmtpClient("mail.matrix-solutions.net"); 
          
         NetworkCredential Credentials = new NetworkCredential("smtp@matrix-solutions.net", "0Mj42xd!"); 
         smtp.Credentials = Credentials;
         smtp.Send(mail); 
         lblMessage.Text = "Mail Sent"; 
    } 
</script> 
<html> 
<body> 
    <form runat="server"> 
        <asp:Label id="lblMessage" runat="server"></asp:Label> 
    </form> 
</body>