	// When the user scrolls down then
	// slide down the navbar
	window.onscroll = function() {
		scroll()
	};

	function scroll() {
		if (document.body.scrollTop > 20 ||
				document.documentElement.scrollTop > 20) {
			document.querySelector("nav").style.top = "0";
		}
		else {
			document.querySelector("nav").style.top
					= "-60px";
		}
	}
