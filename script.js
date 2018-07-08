document.querySelector(".visible-button1").onclick = function() {
    // Select the content
    document.querySelector(".visible-input1").select();
    // Copy to the clipboard
    document.execCommand('copy');
    alert("IP Address Copied!");
  };
  
document.querySelector(".visible-button2").onclick = function() {
    // Select the content
    document.querySelector(".visible-input2").select();
    // Copy to the clipboard
    document.execCommand('copy');
    alert("IP Address Copied!");
  };
  