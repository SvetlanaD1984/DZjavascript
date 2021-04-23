function myTimer() {
	let timeoutId = null;
    let siteTime = new Date(); 
    let hour = siteTime.getHours(); 
    let minute = siteTime.getMinutes(); 
    let second = siteTime.getSeconds(); 
    
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute  = "0" + minute;
    if (second < 10) second  = "0" + second;
   
    document.getElementById("siteTime").innerHTML = hour + ":" + minute + ":" + second; 
  }
 
  
  setInterval(myTimer, 1000); 
