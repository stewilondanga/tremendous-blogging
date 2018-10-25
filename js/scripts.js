var navigate = (function() {
      $('.dd').toggle();
      $('.dd_btn').click(function() {
        var dataName = $(this).attr('data-name');
        $('.dd').hide();
        $('.' + dataName).toggle();
      });
      /*
      	// Prevent orphans
      	function noOrphansPlz() {

      	    let elems = document.querySelectorAll('p, li');

      	    elems.forEach(elem => {

      	        // The result string will be tacked on to this
      	        var result = '';

      	        // Split words/tags into array
      	        let textItems = elem.innerHTML.trim().replace(/&nbsp;/g, ' ').split(/ (?=[^>]*(?:<|$))/);

      	        // Find the second to last work
      	        var targetWord = textItems[(textItems.length - 2)];

      	        // Stick a no break space to the end of the word and replace the instance in the array
      	        textItems[(textItems.length - 2)] = targetWord + '&nbsp;';

      	        // Join the words back together
      	        result = textItems.join(' ');

      	        // Replace whitespace after no break spaces
      	        result = result.replace(/&nbsp; /g, '&nbsp;');

      	        // Set the content of the element with our shiny string
      	        elem.innerHTML = result;
      	    });
      	}


      	// Run the things!
      	noOrphansPlz();
