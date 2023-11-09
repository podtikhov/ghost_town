const grave_cards = document.getElementsByClassName("garve_card_description");
const roadmap_lines = document.getElementsByClassName("lines");
const lines_sections_for_bg_right = document.getElementById("lines_sections_for_bg_right");
const under_roadmap_text = document.getElementById("under_roadmap_text")

function show_roadmap_sections(elem){
    let percent = elem.getAttribute("percent");

    if (percent == 25) {
        grave_cards[1].style.opacity = "1";
        roadmap_lines[0].src = "./img/roadmap/lines/orange/line_section_orange.svg";
    }

    if (percent == 50) {
        grave_cards[1].style.opacity = "1";
        grave_cards[2].style.opacity = "1";

        roadmap_lines[0].src = "./img/roadmap/lines/orange/line_section_orange.svg";
        roadmap_lines[1].src = "./img/roadmap/lines/orange/line_section_orange.svg";
    }

    if (percent == 75) {
        grave_cards[1].style.opacity = "1";
        grave_cards[2].style.opacity = "1";
        grave_cards[3].style.opacity = "1";

        roadmap_lines[0].src = "./img/roadmap/lines/orange/line_section_orange.svg";
        roadmap_lines[1].src = "./img/roadmap/lines/orange/line_section_orange.svg";
        roadmap_lines[2].src = "./img/roadmap/lines/orange/line_section_orange.svg";
    }

    if (percent == 100) {
        grave_cards[1].style.opacity = "1";
        grave_cards[2].style.opacity = "1";
        grave_cards[3].style.opacity = "1";
        grave_cards[4].style.opacity = "1";
        under_roadmap_text.style.opacity = "1";

        roadmap_lines[0].src = "./img/roadmap/lines/orange/line_section_orange.svg";
        roadmap_lines[1].src = "./img/roadmap/lines/orange/line_section_orange.svg";
        roadmap_lines[2].src = "./img/roadmap/lines/orange/line_section_orange.svg";
        roadmap_lines[3].src = "./img/roadmap/lines/orange/line_section_orange.svg";
        roadmap_lines[4].src = "./img/roadmap/lines/orange/line_section_wthout_circle_orange.svg";

        lines_sections_for_bg_right.style.backgroundImage = `url("./img/roadmap/lines/orange/line_section_wthout_circle_orange.svg")`;
        
    }
}

function hide_roadmap_sections(elem){
    let percent = elem.getAttribute("percent");

    if (percent == 25) {
        grave_cards[1].style.opacity = "0";
        roadmap_lines[0].src = "./img/roadmap/lines/grey/line_section.svg";
    }

    if (percent == 50) {
        grave_cards[1].style.opacity = "0";
        grave_cards[2].style.opacity = "0";

        roadmap_lines[0].src = "./img/roadmap/lines/grey/line_section.svg";
        roadmap_lines[1].src = "./img/roadmap/lines/grey/line_section.svg";
    }

    if (percent == 75) {
        grave_cards[1].style.opacity = "0";
        grave_cards[2].style.opacity = "0";
        grave_cards[3].style.opacity = "0";

        roadmap_lines[0].src = "./img/roadmap/lines/grey/line_section.svg";
        roadmap_lines[1].src = "./img/roadmap/lines/grey/line_section.svg";
        roadmap_lines[2].src = "./img/roadmap/lines/grey/line_section.svg";
    }

    if (percent == 100) {
        grave_cards[1].style.opacity = "0";
        grave_cards[2].style.opacity = "0";
        grave_cards[3].style.opacity = "0";
        grave_cards[4].style.opacity = "0";
        
        roadmap_lines[0].src = "./img/roadmap/lines/grey/line_section.svg";
        roadmap_lines[1].src = "./img/roadmap/lines/grey/line_section.svg";
        roadmap_lines[2].src = "./img/roadmap/lines/grey/line_section.svg";
        roadmap_lines[3].src = "./img/roadmap/lines/grey/line_section.svg";
    }
}
