let letter = "آةءإأابتثجحخدذرزسشصضطظعغفقكلمنهوي"
let arr = Array.from(letter);
let conta = document.querySelector(".words");
arr.forEach(function (e) {
    let span = document.createElement("span");
    span.className = "letter-box"
    span.innerHTML = e;
    conta.appendChild(span);
})
let words = {
    جماد: [
        "كرسي", "كتاب", "قلم", "هاتف", "مفتاح", "باب", "سرير", "حاسوب", "مصباح", "ساعة",
        "طاولة", "ثلاجة", "خزانة", "مرآة", "مروحة", "لوحة", "سجادة", "مقعد", "فرن", "دولاب",
        "درج", "مصعد", "سيف", "مقص", "كأس", "زجاجة", "صندوق", "عجلة", "ميكروفون", "مكبر صوت"
    ],
    افلام: [
        "امبراطوريه ميم", "اكس لارج", "طير انت", "الممر", "الجزيره", "ساعه ونص", "عسل اسود",
        "الفيل الازرق", "كده رضا", "تراب الماس", "صعيدي في الجامعه الامريكيه", "ولاد رزق",
        "العار", "حسن ومرقص", "الناظر", "الباشا تلميذ", "صاحبة السعادة", "أبلة طمطم",
        "كازابلانكا", "تيمور وشفيقة", "يوم مالوش لازمة", "زكي شان", "لف ودوران", "حاحا وتفاحة",
        "غبي منه فيه", "اللمبي", "تيتو", "كباريه", "حين ميسرة", "الرهينة"
    ],
    الطبيعه: [
        "جبل", "نهر", "بحر", "شمس", "شجرة", "حجر", "مطر", "ريح", "رمل", "أرض",
        "زهرة", "غيوم", "صحراء", "بركان", "غابة", "ثلج", "برق", "رعد", "شلال", "قمر",
        "كوكب", "نجم", "هواء", "نسيم", "صخر", "مستنقع", "ضباب", "محيط", "فجر", "غروب"
    ],
    دول: [
        "المغرب", "سوريا", "فلسطين", "لبنان", "البحرين", "قطر", "مصر", "الجزائر", "تونس",
        "العراق", "الاردن", "السعودية", "الكويت", "عمان", "اليمن", "ليبيا", "الإمارات", "السودان",
        "جيبوتي", "الصومال", "موريتانيا", "فرنسا", "إيطاليا", "ألمانيا", "الصين", "الهند", "البرازيل",
        "تركيا", "إندونيسيا", "إسبانيا", "روسيا", "الولايات المتحدة"
    ],
    حيوانات: [
        "أسد", "نمر", "فيل", "قطة", "كلب", "ذئب", "دب", "غزال", "ثعلب", "جمل",
        "حصان", "حمار", "بقرة", "ماعز", "خروف", "أرنب", "نسر", "بومة", "سلحفاة", "عقاب",
        "عصفور", "تمساح", "زرافة", "كنغر", "ضفدع", "بطريق", "دلفين", "قرش", "نملة", "نحلة"
    ],
    مأكولات: [
        "بيتزا", "فول", "طعمية", "كشري", "مكرونة", "محشي", "كبسة", "شوربة", "كفتة", "شاورما",
        "همبرجر", "بطاطس", "مندي", "ملوخية", "موز", "تفاح", "تمر", "عنب", "بطيخ", "كنافة",
        "بقلاوة", "بسبوسة", "أرز", "دجاج", "سمك", "بيض", "لبن", "جبن", "عصير", "مانجو"
    ],
    مهن: [
        "طبيب", "مهندس", "مدرس", "محامي", "شرطي", "مزارع", "نجار", "حداد", "خباز", "صيدلي",
        "صحفي", "مترجم", "مصور", "فنان", "طيار", "سائق", "ميكانيكي", "طباخ", "محاسب", "عامل نظافة",
        "عالم", "موسيقي", "ممثل", "رسام", "باحث", "كاتب", "مبرمج", "مدير", "مندوب مبيعات", "ممرض"
    ],
    رياضات: [
        "كرة القدم", "كرة السلة", "كرة الطائرة", "السباحة", "التنس", "تنس الطاولة", "الكاراتيه", "الجودو", "المصارعة", "رفع الأثقال",
        "الجري", "ركوب الخيل", "ركوب الدراجات", "الجمباز", "اليوغا", "الرماية", "التايكوندو", "التزلج", "الغطس", "الملاكمة",
        "سباق السيارات", "البيسبول", "الهوكي", "الركبي", "الباركور", "الكونغ فو", "الترامبولين", "السباحة الحرة", "الرولر", "الفروسية"
    ]
};


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
