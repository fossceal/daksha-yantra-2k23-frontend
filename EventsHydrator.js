const Daksha = `        <div class="eventNugget daksha" id="ev">
            <h4>EVNT<span class="material-symbols-rounded">theater_comedy</span>
            </h4>
            <p>DTT</p>
            <p>VNN</p>
            <p1>Daksha</p1>
            <p style="font-size:12px">Competition</p>
        </div>`
const Yanthra = `
        <div class="eventNugget yanthra" id="ev">
            <h4>EVNT<span class="material-symbols-rounded">CHAMP</span>
            </h4>
            <p>DTT</p>
            <p>VNN</p>
            <p1>Yanthra</p1>
            <p style="font-size:12px">TYPE</p>
        </div>
    `
const CHAMP = {
    competition: "sports_score",
    workshop: "handyman",
    conclave: "groups",
    expo: "rocket_launch",
    games: "sports_esports",
    discussion: "spoke",
    special_event:"verified_user"
}
function checkOdd(num) {
    return num % 2;
}
var n = 0;
var m = 0;
async function Construct() {
    const data = await fetch("event_details.json")
     events = await data.json()
    const eventContainer = document.querySelector(".eventsContainer")
    const ed = events.Daksha.length + events.Yanthra.length
    for (let i = 0; i < ed; i++) {
        if (i < 24) {
            if (!checkOdd(i)) {
                const index = m;
                m++
                const event = events.Daksha[index]
                const eventNugget = Daksha.replace("EVNT", event.name)
                    .replace("DTT", event.time).replace("VNN", event.venue)
            
                eventContainer.innerHTML += eventNugget
            } else {

                const index = n
                n++
                const event = events.Yanthra[index]
                const eventNugget = Yanthra.replace("EVNT", event.name)
                    .replace("DTT", event.time).replace("VNN", event.venue)
                    .replace("CHAMP", CHAMP[(event.type).toLowerCase().replace(" ", "_")]).replace("TYPE", event.type)
                console.log((event.name).toLowerCase())
                eventContainer.innerHTML += eventNugget
            }
        
        } else {
            const index = n
            n++
            const event = events.Yanthra[index]
            const eventNugget = Yanthra.replace("EVNT", event.name)
                .replace("DTT", event.time).replace("VNN", event.venue)
                .replace("CHAMP", CHAMP[(event.type).toLowerCase().replace(" ", "_")]).replace("TYPE", event.type)
            console.log((event.name).toLowerCase())
            eventContainer.innerHTML += eventNugget
        }
    }
}
Construct()