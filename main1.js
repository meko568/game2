let letter = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي"
let arr = Array.from(letter);
let conta = document.querySelector(".words");
arr.forEach(function (e) {
    let span = document.createElement("span");
    span.className = "letter-box"
    span.innerHTML = e;
    conta.appendChild(span);
})
let words = {
    جماد: ["كرسي", "كتاب", "قلم", "هاتف", "مفتاح", "باب", "سرير", "حاسوب", "مصباح", "ساعة"],
    افلام: ["امبراطوريه ميم", "اكس لارج", "طير انت", "الممر", "الجزيره", "ساعه ونص", "عسل اسود"],
    الطبيعه: ["جبل ", "نهر", "بحر", "شمس", "شجره", "حجر", "مطر", "ريح", "رمل", "ارض"],
    دول: ["المغرب", "سوريا", "فلسطين", "لبنان", "البحرين", "قطر", "مصر"],
}
let allkeys = Object.keys(words);
let randomnumber = Math.floor(Math.random() * allkeys.length);
let randomkey = allkeys[randomnumber];
let randominwords = words[`${randomkey}`];
let randominkey = Math.floor(Math.random() * randominwords.length);
let randomword = words[`${randomkey}`][randominkey]
console.log(randomword)
document.querySelector(".kind span").innerHTML = randomkey;
for (let i = 0; i < randomword.length; i++) {
    let span = document.createElement("span");
    if (randomword[i] === " ") {
        span.className = "space right";
    }
    document.querySelector(".word").appendChild(span)

}
let arr1 = Array.from(randomword);
let wrong = 0;
let draw = document.querySelector(".hang")
let letters = document.querySelectorAll(".letter-box");
let the = document.querySelectorAll(".word span");
let y = 0;
let tries = 0;
let sent = ""
letters.forEach(function (e) {
    e.onclick = function () {

        let thestatus = false;
        e.classList.add("clicked");
        let thecliked = e.innerHTML.toLocaleLowerCase();
        arr1.forEach(function (e, index) {
            if (e.toLocaleLowerCase() === thecliked.toLowerCase()) {
                the.forEach(function (letter, indexletter) {
                    if (index === indexletter) {
                        document.getElementById("success").play();
                        letter.innerHTML = e;
                        letter.classList.add("right")
                        thestatus = true;
                    }
                })
            }
        });
        if (thestatus !== true) {
            wrong++;
            ++tries
            draw.classList.add(`wrong-${wrong}`);
            document.getElementById("fail").play()
        }
        if (draw.classList.contains("wrong-8")) {
            let conta = document.createElement("div");
            conta.className = "theconta"
            let div = document.createElement("div");
            div.innerHTML = `game over, the right asnwer is ${randomword}`;
            let button = document.createElement("button");
            button.innerHTML = "play again"
            button.onclick = function () {
                button.style.animationName = "scale";
                setTimeout(() => {
                    location.reload();
                }, 500);
            }
            div.className = "end"
            button.className = "end";
            setTimeout(() => {
                conta.appendChild(div)
                conta.appendChild(button);
                document.body.appendChild(conta)
                endgame();
            }, 1000);
        }
        y = 0
        the.forEach(function (e) {
            if (e.classList.contains("right")) {
                y = y + 1;
                if (the.length === y) {
                    let conta = document.createElement("div");
                    conta.className = "theconta"
                    let div = document.createElement("div");
                    if (tries <= 1) {
                        sent = "amazing"
                    } else if (tries <= 5) {
                        sent = "wow"
                    } else {
                        sent = "nice"
                    }
                    div.innerHTML = `you win in ${tries} tries<p>${sent}</p>`
                    let button = document.createElement("button");
                    div.className = "end"
                    button.className = "end"
                    button.innerHTML = "play again"
                    button.onclick = function () {
                        button.style.animationName = "scale";
                        setTimeout(() => {
                            location.reload();
                        }, 500);
                    }
                    setTimeout(() => {
                        conta.appendChild(div)
                        conta.appendChild(button);
                        document.body.appendChild(conta)
                        endgame();
                    }, 1000);


                };
            }
        })
    }




});
function endgame() {
    letters.forEach(function (e) {
        e.classList.add("clicked")
    });
}
