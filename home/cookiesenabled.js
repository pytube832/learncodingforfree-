const CookiesEnabled = {
  Enabled: true,
  isenabled: function() {
    //checks if cookies are enabled if not it displays a message telling the user to enable cookies
    if(navigator.cookieEnabled = true){alert("cookies Enabled");}else{alert("Enable cookies");}
   }
  isenableddocumentwrite:function(){
    if(navigator.cookieEnabled = true){console.log("Cookies Enabled!")}else{document.write("Enable Cookies")}
  }
 };
const cookies = Object.create(CookiesEnabled);
cookies.isenabled();
