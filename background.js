/*
  Displays a notification with the current time. Requires "notifications"
  permission in the manifest file (or calling
  "webkitNotifications.requestPermission" beforehand).
*/
function show() {
  var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
  var hour = time[1];               // The prettyprinted hour.
  var minute = time[2]; // The period of the day.
  var notification = window.webkitNotifications.createNotification('kuroko.png','啊！！','是不是还有今天结束的task没有点掉..');
  notification.show();
  
  notification.addEventListener('click',function(){
  	chrome.tabs.create({url: 'http://p.corp.anjuke.com/'});
  	notification.cancel();
  })

}

// Test for notification support.
if (window.webkitNotifications) {  

  var interval = 60; // The notification interval, in second.
  
  setInterval(function() {
  	var expectedHour=localStorage["hour"];
  	var expectedMin=localStorage["minute"];
  	var expectedTime=expectedHour+':'+expectedMin;
  	
  	var time = /(..)(:..)/.exec(new Date());
  	var thisTime = time[0];
  	
    if (thisTime.indexOf(expectedTime)>=0) {
      show();
    }
  }, interval*1000);
  
}