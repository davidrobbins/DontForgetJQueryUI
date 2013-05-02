
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//   * * *    j Q U E R Y   -   A U T O C O M P L E T E    * * * 
		
		//S T E P   O N E   -   L E T ' S   H A V E   S O M E   F U N.
		//Simple example to show how jQuery UI autocomplete works. You pass an object as a parameter to the autocomplete method.
		//   The source property of this object is a reference to an array of string values to present to the user.
		//$('#statesInput').autocomplete({source: ["Alaska", "Alabama", "Arizona", "ME", "MD", "MA", "MI", "TN", "TX"]});
		
		
		
		//S T E P   T W O   -   S E E   W H A T   A   F U N C T I O N   C A N   D O.
		//Source property can point to a callback function. The callback function can return the array. Cool.
		/*
		$('#statesInput').autocomplete({source: function(request, response) {
			response(["Alaska", "Alabama", "Arizona", "ME", "MD", "MA", "MI", "TN", "TX"]);
		}});
		*/
		
		
		
		//S T E P   T H R E E   -   C A N   W E   G E T   T H E   D A T A   F R O M   T H E   S E R V E R.   L E T ' S   S E E.
		//But using a dataclass method is better. 
		/*
		$('#statesInput').autocomplete({source: function(request, response) {	
				ds.State.getStates(request.term, {
					onSuccess: function(event) {
						response(event.result.map(function(state) {return state.usps;}));
					}
				});
			}
		});
		*/
		
		
		
		//S T E P   F O U R   -   W I T H   S O M E   H E L P   F R O M   L A U R E N T   W E   S H U T   T H E   D O O R.
		/*
		$("#firstNameInput").autocomplete({
      			source: "/jqueryAutoComplete/Person/firstName"
     	});
     	*/
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
