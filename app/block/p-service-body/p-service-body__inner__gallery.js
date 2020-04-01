
	$(document).ready(function() {
		$(".fancybox").fancybox({
            openEffect	: 'elastic',
            closeEffect	: 'elastic',
            closeBtn	: false,
            autoPlay    : true,
            playSpeed   : 10000,
            helpers		: {
                title	: { 
                    type : 'float' 
                },
                buttons	: {},
                thumbs	: {
                    width	: 50,
                    height  : 50
                }
            }
        });
	});
