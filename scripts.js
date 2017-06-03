var welcome = "welcome!".split('');

// Define function for loop through to print "w...e...l...c..."
function type(i) {
	setTimeout(function() {
    	var letter = welcome[i].toString;
        $("#loading").append(welcome[i]);
    }, i * 100);
}

// Do typing loop
for (i = 0; i <= welcome.length; i++) {
    type(i);
}