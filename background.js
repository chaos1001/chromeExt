/*
  Displays a notification with the current time. Requires "notifications"
  permission in the manifest file (or calling
  "webkitNotifications.requestPermission" beforehand).
*/
function show() {
  var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
  var hour = time[1];               // The prettyprinted hour.
  var minute = time[2]; // The period of the day.
  var notification = window.webkitNotifications.createNotification('kuroko.png','notification demo','Judgement.'+hour+' '+minute);
  notification.show();
}

// Test for notification support.
if (window.webkitNotifications) {  
  var expectedHour='11';
  var expectedMin='28';
  var expectedTime=expectedHour+':'+expectedMin;
  var interval = 60; // The notification interval, in second.
  
  setInterval(function() {
  	var time = /(..)(:..)/.exec(new Date());
  	var thisTime = time[0];
  	
    if (thisTime.indexOf(expectedTime)>=0) {
    	console.log(expectedTime);
      show();
    }
  }, interval*1000);
  
}