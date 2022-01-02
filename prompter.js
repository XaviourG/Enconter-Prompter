const btn1 = document.querySelector('button');
const btn2 = document.querySelector('button[id="btn2"]');

function getSenPrompt() {
    let prompt = 'Oh no, Somethings gone wrong!!!';
    let promptFormat = Math.ceil((Math.random() * 3));
    switch (promptFormat) {
        case 1: // Interaction
            prompt = `${r(where)} ${r(count)} ${r(character)} ${r(interaction)} ${r(count)} ${r(character)}!`
            break;
        case 2: // Movement
            prompt = `${r(count)} ${r(character)} ${r(move)} ${r(where)}!`
            break;
        case 3: // Three-way
            prompt = `${r(where)} ${r(count)} ${r(character)} ${r(interaction)} ${r(count)} ${r(character)}, while ${r(count)} ${r(character)} ${r(watches)}!`
            break;
    }
    console.log(prompt);
    let formatedPrompt = prompt.toLowerCase();
    btn1.innerText = formatedPrompt.charAt(0).toUpperCase() + formatedPrompt.slice(1);;
    return prompt;
}

function getActPrompt() {
    let prompt = 'Oh no, Somethings gone wrong!!!';
    let promptFormat = Math.ceil((Math.random() * 2));
    switch (promptFormat) {
        case 1: // Interaction
            prompt = `The ${charHeight()}" ${r(race)} ${r(classs)} ${r(interaction)} ${r(count)} ${r(character)} ${r(where)}!`
            break;
        case 2: // Interaction
            prompt = `The ${charHeight()}" ${r(race)} ${r(classs)} ${r(interaction)} ${r(count)} ${r(character)} ${r(where)}!`
            break;
        case 3: // Three-way
            prompt = `${r(where)} ${r(count)} ${r(character)} ${r(interaction)} ${r(count)} ${r(character)}, while ${r(count)} ${r(character)} ${r(watches)}!`
            break;
    }
    console.log(prompt);
    let formatedPrompt = prompt.toLowerCase();
    btn2.innerText = formatedPrompt.charAt(0).toUpperCase() + formatedPrompt.slice(1);;
    return prompt;
}

function processFile(fileName) {
    //read file return array of values
}

function charHeight() { return 3 + ((Math.floor(Math.random() * 70)) / 10); }

function r(array) {
    return array[
        Math.ceil((Math.random() * array.length) - 1)
    ];
}

//BOOT PROCESS;
//const chars = processFile('characters.txt');
const character = [
    'Blue skinned Orc(s)',
    'Black Dragon(s)',
    'Storm Giant(s)',
    'Lovecraftian Horror(s)',
    'Fluffy White Sheep',
    'regular ass chicken(s)',
    'Archangle(s)',
    'Devil(s)',
    'Beholder(s)',
    'Undead Construct(s)',
    'Living strand(s) of Starlight',
    'animated kitchen utensil(s)',
    'miniature dinosaur(s)'
];

const count = [
    'A single',
    'A few',
    'A group of',
    'An army of',
    'an infinite horde of'
];

const where = [
    'Atop an active volcano',
    'Within a fathomless ravine',
    'Inside the eye of a gargantuan storm',
    'before the celestial court',
    'atop raging waves',
    'within the depths of a litchs laboratory',
    'within the ruins of an ancient kindom',
    'inside the heart of a savage jungle',
    'beyond the bounds of space and time',
    'atop a chain of floating islands',
    'atop the golden sands of an endless dessert'
];

const interaction = [
    'Fight(s) to the death against',
    'Daintly sip(s) tea with',
    'Politely discuss(es) philosophy with',
    'Express(es) their/its undying love for',
    'massacre(s)',
    'commit(s) genocide before the horrified eyes of',
    'wage(s) war against',
    'pillage(s) the homeland of',
    'easily suppress(es)'
];

const move = [
    'charge(s)',
    'march(es)',
    'soar(es) through air',
    'cautiously aproach(es) the horrific spectacle',
    'drunkenly stumble(s)',
    'flee(s) in abject terror'
];

const watches = [
    'watch(es) from afar',
    'readies to attack',
    'take(s) bets',
    'consdiers the morality of their actions',
    'gazes over it lustfully'
];

const race = [
    'Human',
    'Elf',
    'Dawrf',
    'Halfling',
    'Dragonborn',
    'Tabaxi',
    'Tortle',
    'Lionel',
    'Elephantfolk',
    'Genasi',
    'Shifter',
    'Warforged'

]

const classs = [
    'Fighter',
    'Barbarian',
    'Monk',
    'Wizard',
    'Sorcerror',
    'Warlock',
    'Archer',
    'Artificer',
    'Druid',
    'Rouge'
]


btn1.addEventListener('click', getSenPrompt);
btn2.addEventListener('click', getActPrompt);