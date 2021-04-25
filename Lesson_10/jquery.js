$(document).ready(function() {
	$('#sendByGet').bind('click', function() {
		$('#infUser:nth-child(1)').text('asdasd');
		var userData = {
				surName : $('#surNameGet').val(),
				name : $('#nameGet').val(),
				age : $('#ageGet').val(),
				address : $('#addressGet').val()
			};
		$('#info p:nth-child(1)').text(userData.surName);
		$('#info p:nth-child(2)').text(userData.name);
		$('#info p:nth-child(3)').text(userData.age);
		$('#info p:nth-child(4)').text(userData.address);
		$.ajax({
			type:  'GET',
			contentType: 'application/json',
			url: 'http://localhost:3000/userGet?userSurName=' + userData.surName + '&userName=' + userData.name + '&userAge=' + userData.age + '&userAddress=' + userData.address,
			success: function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
			}
		});
	});
});

$(document).ready(function() {
	$('#sendByPost').bind('click', function() {
		var userData = {
			surName : $('#surNamePost').val(),
			name : $('#namePost').val(),
			age : $('#agePost').val(),
			address : $('#addressPost').val()
		};
		$('#info2 p:nth-child(1)').text(userData.surName);
		$('#info2 p:nth-child(2)').text(userData.name);
		$('#info2 p:nth-child(3)').text(userData.age);
		$('#info2 p:nth-child(4)').text(userData.address);
		$.ajax({
			type : 'POST',
			data : JSON.stringify({userData}),
			contentType : 'application/json',
			url : 'http://localhost:3000/userPost',
			success : function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
			}
		});

	});
});
