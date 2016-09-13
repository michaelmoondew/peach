$(".datePickerOption").click(function(event) {
	/* Act on the event */
	$(".datePickerOption").removeClass('datePickerOption--active');
	$(this).toggleClass('datePickerOption--active');
	$(".timePicker").css('display', 'flex');
	setTimeout(function(){
		$(".timePicker").addClass('timeActive');
	}, 300);
});

$(".timePickerOption").click(function(event) {
	/* Act on the event */
	$(".timePickerOption").removeClass('timePickerOption--active');
	$(this).toggleClass('timePickerOption--active');
	$(".scheduleNowButtonContainer").addClass('scheduleNowButtonContainer--active');
});