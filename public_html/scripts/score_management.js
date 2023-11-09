const left_arrow = document.getElementById("left_arrow");
const right_arrow = document.getElementById("right_arrow");
const score_input = document.getElementById("score_input");

function inc_score() {
    score_input.value = (parseInt(score_input.value, 10) + 1).toString();

    check_score();
}

function dec_score() {
    score_input.value = (score_input.value - 1).toString();

    check_score();
}

function check_score() {
    if (score_input.value > 20) {
        score_input.value = 20;
    }

    if (score_input.value < 1) {
        score_input.value = 1;
    }
}

function prevent_input_of_symbols() {
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false;
    }
}