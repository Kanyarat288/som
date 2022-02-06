function picture(){ 
    var pic = "https://scontent.xx.fbcdn.net/v/t1.15752-9/272005219_4698268313623100_8703947464617118030_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGAs4IOd3Q3vRFBShMEMXQOaPK8lIgFTY9o8ryUiAVNjy9DKCoQHcMGdWNmZiuJiiWldb1ua63mkP0bkWX4diya&_nc_ohc=0XbOZe8xARcAX9PGkVY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ0-xKpu0B0ECcywi6PWmkLZ1KhaKiFL4YS95qWVaTy1Q&oe=62213654"
    document.getElementById('bigpic').src = pic.replace('90x90', '225x225');
    document.getElementById('bigpic').style.display='block';

    }




////////////////////////////
// Twitter: @mikedevelops
////////////////////////////

// your custome placeholder goes here!
var ph = "Search Website e.g. \"Dancing Cats\"",
	searchBar = $('#search'),
	// placeholder loop counter
	phCount = 0;

// function to return random number between
// with min/max range
function randDelay(min, max) {
	return Math.floor(Math.random() * (max-min+1)+min);
}

// function to print placeholder text in a 
// 'typing' effect
function printLetter(string, el) {
	// split string into character seperated array
	var arr = string.split(''),
		input = el,
		// store full placeholder
		origString = string,
		// get current placeholder value
		curPlace = $(input).attr("placeholder"),
		// append next letter to current placeholder
		placeholder = curPlace + arr[phCount];
		
	setTimeout(function(){
		// print placeholder text
		$(input).attr("placeholder", placeholder);
		// increase loop count
		phCount++;
		// run loop until placeholder is fully printed
		if (phCount < arr.length) {
			printLetter(origString, input);
		}
	// use random speed to simulate
	// 'human' typing
	}, randDelay(50, 90));
}  

// function to init animation
function placeholder() {
	$(searchBar).attr("placeholder", "");
	printLetter(ph, searchBar);
}

placeholder();
$('.submit').click(function(e){
	phCount = 0;
	e.preventDefault();
	placeholder();
});
