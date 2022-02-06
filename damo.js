function picture(){ 
    var pic = "https://scontent.xx.fbcdn.net/v/t1.15752-9/272210270_625260858761184_1655925930910868237_n.png?_nc_cat=100&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGIcDgMpBG-ueQj8WIv7PVCPpiwHUq9BQ8-mLAdSr0FD9SCiB8R9VsJaiEQzItrZCdHWsSeb2AEzxJycm1NVN7s&_nc_ohc=2scpnmsfLKwAX9HcJI3&_nc_oc=AQk6c7G9hiv9TNN_KZH1Bvg4Q-LYZ3S3gd-nVpqO8ZTMBqyY5WJJCWrC125xa4CdtprtjxCksE6DdyOYnhMT1COI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVI7HxZZtpqF1-8BgYdupK9CW9YR3XSrh70o4X6JhArx7A&oe=621BD07C"
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
