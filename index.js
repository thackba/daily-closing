document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start").addEventListener("click", (e) => {
        e.target.setAttribute("disabled", "true");
        const audioElement = document.getElementById("audio");
        const currentDate = new Date();
        const day = currentDate.getDay();
        if (day > 0 && day < 6) {
            let timeSelector = 1;
            if (currentDate.getHours() > 12) {
                timeSelector = 2;
            }
            audioElement.setAttribute("src", `./0${day}-0${timeSelector}.mp3`);
        } else {
            audioElement.setAttribute("src", "./00.mp3")
        }
        audioElement.play();
    });
    document.getElementById("audio").addEventListener("ended", (e) => {
        const button = document.getElementById("start");
        button.removeAttribute("disabled");
    })
});