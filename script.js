function checkValue() {
    let selected = document.querySelector('input[name="choice"]:checked');
    let option = document.getElementById("option");

    let input = document.getElementById("numberInput");
    let value = input.value.trim();

    if (value === "") {
        alert("Kenttä on tyhjä");
    } else if (!isNaN(Number(value))) {
        if (selected != null) {
            let num = Number(input.value)
            if (option.value == 1){
                if (num < -273.15) {
                    alert("Lämpötila ei voi olla pienempi kuin -273,15 °C (absoluuttinen nollapiste)");
                } else {
                    countResult(selected.value, num, option.value)
                }
            } else if (option.value == 2) {
                if (num < -459.67) {
                    alert("Lämpötila ei voi olla pienempi kuin -459,67 °F (absoluuttinen nollapiste)");
                } else {
                    countResult(selected.value, num, option.value)
                }
            }
        } else {
            alert("Unohdit valita desimaalin!")
        };
    } else {
        alert("Syötä luku!");
    };
};


function countResult(selected, num, option) {
    if (option == 1) {
        let result = (num * 1.8) + 32;
        decimal(selected, result);
    } else if (option == 2) {
        let result = (num - 32) / 1.8;
        decimal(selected, result);
    };
};


function decimal(selected, number) {
    
    if (selected == "a") {
        let rounded = number.toFixed(1);
        showResult(rounded);
    } else if (selected == "b") {
        let rounded = number.toFixed(2);
        showResult(rounded);
    } else if (selected == "c") {
        let rounded = number.toFixed(3);
        showResult(rounded);
    };
}


function showResult(result) {
    document.getElementById("result").innerText = result;
}