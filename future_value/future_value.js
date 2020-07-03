"use strict";

// The jQuery $ function
function $(id) {
    return document.getElementById(id);
};

// Calculates the total return on an investment based on the number of years one is invested and an assumed annual rate of return.
function calculateFV(totalInvestment, annualInterestRate, numberOfYears) {
	let basePlusInterest = (1 + annualInterestRate/100);
	if (numberOfYears === 1){
		return totalInvestment * basePlusInterest;
	}
	else {
		return calculateFV(totalInvestment, annualInterestRate, numberOfYears - 1) * basePlusInterest;
	}	
}
// Note: since rounding to two decimal places in the function itself would lead to greater inaccuracies at higher values, truncating the result to two places is handled in the onclick call rather than in the CalculateFV function itself.


function processEntries() {
	let investmentValue = parseFloat($('investment').value);
	let rate = parseFloat($('rate').value);
	let years = parseFloat($('years').value);
	let errorMessage;
	if (!$('investment').value || !$('rate').value || !$('investment').value) {
		alert("All fields are required");
	}
	else if(isNaN(investmentValue) || isNaN(rate) || isNaN(years)) {
		alert("All entries must be numeric");
	}
	else if 	(investmentValue <= 0 || investmentValue > 100000){
		errorMessage = "Investment must be a number greater than 0 and less than or equal to 100,000."
		alert(errorMessage);
		$('investment').focus();
	}
	else if (rate <= 0 || rate > 15) {
		errorMessage = "Investment rate must be greater than 0 and less than or equal to 15%."
		alert(errorMessage);
		$('rate').focus();
	}
	else if (years <= 0 || years > 50 || years % 1 !== 0) {
		errorMessage = "Number of years must be a positive integer of 50 or less";
		alert(errorMessage);
		$('years').focus();
	}
	else {
		future_value.value = calculateFV(investmentValue, rate, years).toFixed(2);
	}	
}

window.onload = function() {
	$('calculate').onclick = processEntries;	
	$('future_value').focus();
}

