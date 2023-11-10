({
	doinit : function(component, event, helper) {
        var action = component.get('c.getconlist');
        
        action.setCallback(this, function(response){
            var responseval = response.getReturnValue();
            console.log('responseValue', responseval);
            component.set('v.conlist' , responseval);
            },'SUCCESS');
        $A.enqueueAction(action , false);
		
	}
})