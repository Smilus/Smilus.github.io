/*
Sources:

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play
https://www.w3schools.com/JS/js_random.asp
https://www.w3schools.com/Jsref/jsref_includes_array.asp
https://www.w3schools.com/jsref/jsref_push.asp
https://www.w3schools.com/jsref/met_node_replacechild.asp
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

*/

const situations = [
    {id:0, text:`You have perished.`,
        ry:`Goodbye.`,
        rn:`You cannot escape death.`,
        value:0},
    {id:0, text:`You stand at a lever near a set of trolley tracks.
        A trolley is hurtling towards a junction. If you do nothing, the trolley will continue forward.
        Subsequently, it will hit and brutally crush five people who are tied to the tracks.
        If you switch the lever, the trolley will be diverted onto another track.
        There, it will savagely mutilate a single person.
        Do you flip the lever?`,
        ry:`The trolley's wheels crush the one man into gelatin.
        The other five people, upon release, shake your hand. "Heil," they say in unison before departing.`,
        rn:`Splat, splat, splat, splat, splat. It's difficult to watch.`,
        value:4},
    {id:0, text:`You've gotten a job as a surgeon. You have six patients in dire need of an organ transplant.
        One day, a healthy patient, bearing all the requisite organs, saunters in for a checkup.
        You can kill him and steal his organs, giving him to the six and saving their lives.
        Otherwise, they will die. You feel the cold metal of your scalpel resting in your hand.
        Do you lunge for the healthy patient?`,
        ry:`Blood sprays everywhere as you plunge the scalpel into the patient's neck.
        With cold professionalism, you excise the necessary organs and perform the six transplants.
        You clean up the scene and burn the body, ensuring that no one will know.
        However, rumor begins to spread about a patient who disappeared after going in for a routine checkup.
        Stories reach your ears of people staying home from the doctor and dying of preventable illness.
        The paranoia you inflicted upon your community claims many lives. What have you done?`,
        rn:`The patient undergoes their checkup, then leaves.
        The six patients in critical condition perish, dying agonizing deaths.
        Their families weep salty tears as you look on.`,
        value:-10},
    {id:0, text:`You just found out that you're pregnant thanks to several beers too many last night.
        Do you get an abortion?`,
        ry:`Yeetus the fetus.`,
        rn:`You're such a good Christian.`,
        value:0},
    {id:0, text:`You're driving home from work when a curious thought hits you:
        If you donated your life's savings to charity, you could possibly save hundreds of lives.
        In fact, shouldn't everyone donate all their savings? Think of the children starving in Africa.
        Do you rush to the bank, jack open your account, and give it all away?`,
        ry:`Your money is gone, sent away to humanitarian efforts in the DRC.
        Unfortunately, some of it gets embezzled by corrupt government officials.
        However, much of the money makes it.
        While you must give up many of life's luxuries, you go to sleep each night knowing you did the right thing.`,
        rn:`A bunch of kids in Africa die of malaria. Big deal. It happens every day.
        It's not like they're Americans, at least. You bigoted scum.`,
        value:50},
    {id:0, text:`Your best friend, Orenthal, dashes past you towards an intersecting street and turns to the right.
        Moments later, a shaggy looking fellow with wild eyes dashes up, clutching a knife.
        "WHERE'S ORENTHAL?" he screams, frothing at the mouth.
        Do you lie and say that he went to the left?`,
        ry:`The murderer zooms off, turning to the left. The sin of your lie rests heavy upon your soul.`,
        rn:`The murderer zooms off, turning to the right. A few moments later, you hear your friend scream,
        before going silent. At least you told the truth, you god-damn deontologist.`,
        value:1},
    {id:0, text:`Your poor Babushka is freezing as you visit her in the cold, Siberian north.
        You have no money to buy her a coat, however. While walking down the stret,
        you come across a wealthy looking chap wearing a beautiful, fluffy fur coat.
        As he stoops to pick up a loose Ruble, because he's not rich enough, you have a chance to steal the coat.
        Do you do it?`,
        ry:`You take the coat and deliver it to your Babushka,
        who is highly pleased and makes you some delicious pierogi.`,
        rn:`You let the man be. Your Babushka is freezing and deeply disappointed with you,
        cudgeling you over the head with a spoon.
        "You are a disappointment to our entire family," she says. "You know I was in Russian mob?
        Your Babushka has more balls than you."`,
        value:0.2},
    {id:0, text:`You just got a job at the CIA. Recent intelligence from the NSA confirms the following:
        A rogue state terrorist cell is operating out of an orphanage in Botswana.
        They intend to detonate a plastic bomb in a nearby administrative building,
        which contains 31 people at the moment. There are 3 terrorists in the orphanage, plus 28 orphans.
        You must act fast. Do you call in a drone strike on the orphanage,
        foiling the sinister plot but killing the children?`,
        ry:`*Terrified child noises.*`,
        rn:`*Terrified administrator noises.*`,
        value:0.5},
    {id:0, text:`Your friend Schmerica said some truly terrible things about your friend Schmosh behind his back.
        A couple days later, Schmosh is asking you what Schmerica said. Do you lie, or do you tell the truth?`,
        ry:`How Kantian of you.`,
        rn:`Filthy liar.`,
        value:0.01},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
    {id:0, text:``, ry:``, rn:``, value:0},
];

for (let x = 0; x < situations.length; x++) {
    situations[x].id = x;
}

// Music
function playJazz() {
    document.getElementById("jazz").play();
}

// Morality
let morality = 0;
let picked = [-1];
let current = -1;

function scenario() {
    console.log(current);


    if (current == 0) {
        death();
    }

    let x = document.getElementById("next");
    let y = document.getElementById("decide");
    x.style.display = "none";
    y.style.display = "block";

    let s = -1;
    while (picked.includes(s)) {
        s = Math.floor(Math.random() * 10); // Subject to CHANGE
    }
    current = s;
    picked.push(s);

    const newNode = document.createTextNode(situations[s]["text"]);
    const element = document.getElementById("main").children[0];

    console.log(element)

    element.replaceChild(newNode, element.childNodes[0]);
}

function yes() {
    let x = document.getElementById("next");
    let y = document.getElementById("decide");
    y.style.display = "none";
    x.style.display = "block";

    const newNode = document.createTextNode(situations[current]["ry"]);
    const element = document.getElementById("main").children[0];

    element.replaceChild(newNode, element.childNodes[0]);

    morality += situations[current]["value"];
}

function no() {
    let x = document.getElementById("next");
    let y = document.getElementById("decide");
    y.style.display = "none";
    x.style.display = "block";

    const newNode = document.createTextNode(situations[current]["rn"]);
    const element = document.getElementById("main").children[0];

    element.replaceChild(newNode, element.childNodes[0]);

    morality -= situations[current]["value"];
}

function death() {
    if (morality < -5) {
        window.location.replace("hell.html");
    } else if (morality > 5) {
        window.location.replace("heaven.html");
    } else {
        window.location.replace("purgatory.html");
    }
}

function slidy() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
}

let noise = document.getElementById("bark");

function sealnoise() {
    noise.play();

    console.log("BORK");
}