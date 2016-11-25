$(document).ready(function(){	
	var timerWorker;
	var number = 60;
	timerWorker = new Worker('javascripts/timer_worker.js');
	timerWorker.addEventListener('message',function(e){
		document.getElementById('gameTimer').innerHTML = "Your Remaining time : " + e.data;
	},false);
	
	setInterval(function(){
		if(number==0){alert("Time Over , Try Again!!");location.reload();}
		timerWorker.postMessage(number);
		number--;		
	},1000);	
});