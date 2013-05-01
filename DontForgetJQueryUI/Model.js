
guidedModel =// @startlock
{
	State :
	{
		methods :
		{// @endlock
			getStates:function(term)
			{// @lock
				var matchStates = ds.State.query("usps == :1", term + '*');
				return matchStates.toArray("usps");
			}// @startlock
		}
	}
};// @endlock
