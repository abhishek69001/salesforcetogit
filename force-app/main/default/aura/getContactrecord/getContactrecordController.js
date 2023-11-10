({
	myAction : function(component, event, helper) {
        var records = component.get("c.getcontact");
        records.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var getdata = response.getReturnValue();
                alert(getdata);
                
            }
        	alert(state);
        });
    	$A.enqueueAction(records);
	}
})