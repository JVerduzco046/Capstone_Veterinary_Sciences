"use strict"



// Determines wheather a credit card is real or not //
function luhn(idNum) {

    var string1 = "";

    var string2 = "";
    //retrive the odd number dig||its
    for (let i = idNum.length - 1; i >= 0; i -= 2) {

        string1 += idNum.charAt(i);

    }
    //retirve even number and double them
    for (let i = idNum.length - 2; i >= 0; i -= 2) {

        string2 += 2 * idNum.charAt(i);

    }
    //return wether the sum of the digits is divisible by 10
    return sumDigits(string1 + string2) % 10 === 0;

}
// validates the card year 
function validateYear() {

    var cardYear = document.getElementById("expYear")

    if (expYear.selectedIndex === 0) {

        cardYear.setCustomValidity("Select the expiration year.");

    } else {

        cardYear.setCustomValidity("");


    }
}
// veryfies the cvc matches the credit card type
function validateCVC() {

    var cardCVC = document.getElementById("cvc")

    var creditCard = document.querySelector('input[name="credit"]:checked').value;

    if (cardCVC.validity.valueMissing) {

        setCustomValidity("Enter your CVC number")

    } else if ((creditCard === "amex") && (/^\d{4}$/.test(cardCVC.value) === false)) {

        cardCVC.setCustomValidity("Enter a 4-digit CVC number");

    } else if ((creditCard !== "amex") && (/^\d{3}$/.test(cardCVC.value) === false)) {

        cardCVC.setCustomValidity("Enter a 3-digit CVC number");

    } else {

        cardCVC.setCustomValidity("");
    }
}
// Makes sure the card number follows the pattern given//
function validateNumber() {

    var cardNumber = document.getElementById("cardNumber");

    if (cardNumber.validity.valueMissing) {

        cardNumber.setCustomValidity("Enter your card Number")

    } else if (cardNumber.validity.patternMisMatch) {

        cardNumber.setCustomValidity("Enter a valid card Number")

    } else if (luhn(cardNumber.value) === false) {

        cardNumber.setCustomValidity("Enter a legitimant card number")

    } else {

        creditCard.setCustomValidity("")
    }
}