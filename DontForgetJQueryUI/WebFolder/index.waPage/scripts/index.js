
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//We want to enable autocomplete for state input field.
		//Let's use jQuery UI autocomplete.
		
		//Simple example to show setup.
		//$('#statesInput').autocomplete({source: ["Alaska", "Alabama", "Arizona", "Maine", "Montana", "Oregon", "Texas", "Vermont", "Washington"]});
		

		//Source property can point to a callback function.
		/*
		$('#statesInput').autocomplete({source: function(request, response) {
			response(["Alaska", "Alabama", "Arizona", "Maine", "Montana", "Oregon", "Texas", "Vermont", "Washington"]);
		}});
		*/
		
		//But using a dataclass method is best. 
		/**/
		$('#statesInput').autocomplete({
			source: function(request, response) {	
				ds.State.getStates(request.term, {
					onSuccess: function(event) {
						response(event.result.map(function(state) {return state.usps;}));
					}
				});
			}
		});
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
