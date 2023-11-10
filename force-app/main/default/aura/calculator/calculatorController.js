({
	calculate : function(component, event, helper) {
        var num1 = component.find("num1").get("v.value");
        var num2 = component.find("num2").get("v.value");
        var sum = Number(num1) + Number(num2);
        component.set("v.sum", sum);
        
		
	}
})