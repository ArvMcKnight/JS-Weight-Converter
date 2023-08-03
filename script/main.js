function convertWeight() {
    let weightInput = parseFloat(document.querySelector("#weightInput").value);
    let fromUnit = document.querySelector("#fromUnit").value;
    let toUnit = document.querySelector("#toUnit").value;

    let convertedWeight;
    // set 1
    if (fromUnit === "pounds" && toUnit === "kilograms") {
        convertedWeight = weightInput * 0.453592;
    }
    else if (fromUnit === "pounds" && toUnit === "grams") {
        convertedWeight = weightInput * 453.592;
    }
    else if (fromUnit === "pounds" && toUnit === "ounce") {
        convertedWeight = weightInput * 16;
    }
    else if (fromUnit === "pounds" && toUnit === "tonne") {
        convertedWeight = weightInput * 0.000453592;
    }
    //set 2
    else if (fromUnit === "kilograms" && toUnit === "pounds") {
        convertedWeight = weightInput * 2.20462;
    }
    else if (fromUnit === "kilograms" && toUnit === "grams") {
        convertedWeight = weightInput * 1000;
    }
    else if (fromUnit === "kilograms" && toUnit === "ounce") {
        convertedWeight = weightInput * 35.274;
    }
    else if (fromUnit === "kilograms" && toUnit === "tonne") {
        convertedWeight = weightInput * 0.001;
    }
    //set 3
    else if (fromUnit === "grams" && toUnit === "pounds") {
        convertedWeight = weightInput * 0.00220462;
    }
    else if (fromUnit === "grams" && toUnit === "kilograms") {
        convertedWeight = weightInput * 0.001;
    }
    else if (fromUnit === "grams" && toUnit === "ounce") {
        convertedWeight = weightInput * 0.035274;
    }
    else if (fromUnit === "grams" && toUnit === "tonne") {
        convertedWeight = weightInput * 0.000001;
    }
    //set 4
    else if (fromUnit === "ounce" && toUnit === "pounds") {
        convertedWeight = weightInput * 0.0625;
    }
    else if (fromUnit === "ounce" && toUnit === "kilograms") {
        convertedWeight = weightInput * 0.0283495;
    }
    else if (fromUnit === "ounce" && toUnit === "grams") {
        convertedWeight = weightInput * 28.3495;
    }
    else if (fromUnit === "ounce" && toUnit === "tonne") {
        convertedWeight = weightInput * 0.0000283495;
    }
    //set 5
    else if (fromUnit === "tonne" && toUnit === "pounds") {
        convertedWeight = weightInput * 2204.62;
    }
    else if (fromUnit === "tonne" && toUnit === "kilograms") {
        convertedWeight = weightInput * 1000;
    }
    else if (fromUnit === "tonne" && toUnit === "grams") {
        convertedWeight = weightInput * 1000000;
    }
    else if (fromUnit === "tonne" && toUnit === "ounce") {
        convertedWeight = weightInput * 35273.96195;
    }
    //same unit, no conversion
    
    else {
        convertedWeight = weightInput;
        alert("Same units is equals to 1. Please make sure it's different units.");
    }

    document.getElementById("result").innerText = weightInput + "  " + fromUnit + "  is  " + convertedWeight + "  " + toUnit + ".";
}