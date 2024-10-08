<!DOCTYPE html>
<html>
<head>
<title>FeedBack Form With Email Functionality</title>
<style>
body,input, textarea{background: #eaeaea;}
.container{position: relative;
 }
.Absolute-Center {
  width: 50%;
  height: 50%;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}
#feedback {
width: 40em;height: 14em;
}
input, textarea {
width: 90%;
border: 1px solid #00f;
line-height: 2.5;
margin-bottom: .4em;
padding-left: 1em;
color: #00f;
}
input[type="submit"] {
color: #fff;
width: 10em;
background: #00f;
}
        
    
::-webkit-input-placeholder {
   color: #00f;
}

:-moz-placeholder { /* Firefox 18- */
   color: #00f;  
}

::-moz-placeholder {  /* Firefox 19+ */
   color: #00f;  
}

:-ms-input-placeholder {  
   color: #00f;  
}
</style>
<link href="img/favicon.ico" rel="shortcut icon">
<link rel="icon" type="image/ico" href="img/favicon.ico"/>
</head>
<!-- Body Starts Here -->
<body>
<div class="container Absolute-Center">
    <div id="feedback" class="Absolute-Center">
    <!-- Heading Of The Form -->
<!--
        <div class="head">
            <h3>FeedBack Form</h3>
            <p>This is feedback form. Send us your feedback !</p>
        </div>
-->
        <!-- Feedback Form -->
        <form action="#" id="form" method="post" name="form">
        <input name="vname" placeholder="Name" type="text" value="">
        <input name="vemail" placeholder="Email" type="text" value="">
        <input name="sub" placeholder="Subject" type="text" value="">
        <textarea name="msg" placeholder="drop us a line here..."></textarea>
        
        <input id="send" name="submit" type="submit" value="Send">
        </form>
        <h3><?php include "secure_email_code.php"?></h3>
    </div>
</div>
</body>
<!-- Body Ends Here -->
</html>