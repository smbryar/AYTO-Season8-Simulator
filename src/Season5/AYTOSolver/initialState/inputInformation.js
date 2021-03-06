const initialContestants = {
    women: ["Alicia", "Carolina", "Cas", "Gianna", "Hannah", "Kam", "Kari", "Kathryn", "Shannon", "Taylor", "Tyranny"],
    men: ["Andre", "Derrick", "Edward", "Hayden", "Jaylan", "Joey", "Michael", "Mike", "Osvaldo", "Ozzy", "Tyler"]
};

const initialTruthBooths = [
    { week: 1, woman: "Gianna", man: "Hayden", correct: false },
    { week: 2, woman: "Alicia", man: "Andre", correct: false },
    { week: 3, woman: "Carolina", man: "Ozzy", correct: false },
    { week: 4, woman: "Tyranny", man: "Osvaldo", correct: false },
    { week: 5, woman: "Kam", man: "Edward", correct: true },
    { week: 6, woman: "Hannah", man: "Ozzy", correct: false },
    { week: 7, woman: "Taylor", man: "Andre", correct: false },
    { week: 8, woman: "Carolina", man: "Hayden", correct: true }]


const initialMatchingCeremonies = [
    {
        week: 1, lights: 2,
        pairs: [{ woman: "Alicia", man: "Andre" }, { woman: "Carolina", man: "Joey" }, { woman: "Cas", man: "Jaylan" }, 
        { woman: "Gianna", man: "Ozzy" }, { woman: "Hannah", man: "Michael" }, { woman: "Kam", man: "Edward" }, 
        { woman: "Kari", man: "Mike" }, { woman: "Kathryn", man: "Derrick" }, { woman: "Shannon", man: "Hayden" }, 
        { woman: "Taylor", man: "Tyler" }, { woman: "Tyranny", man: "Osvaldo" }]
    },
    {
        week: 2, lights: 0,
        pairs: [{ woman: "Alicia", man: "Derrick" }, { woman: "Carolina", man: "Joey" }, { woman: "Cas", man: "Mike" }, 
        { woman: "Gianna", man: "Michael" }, { woman: "Hannah", man: "Andre" }, { woman: "Kam", man: "Jaylan" }, 
        { woman: "Kari", man: "Osvaldo" }, { woman: "Kathryn", man: "Ozzy" }, { woman: "Shannon", man: "Edward" }, 
        { woman: "Taylor", man: "Hayden" }, { woman: "Tyranny", man: "Tyler" }]
    },
    {
        week: 3, lights: 4,
        pairs: [{ woman: "Alicia", man: "Mike" }, { woman: "Carolina", man: "Hayden" }, { woman: "Cas", man: "Jaylan" }, 
        { woman: "Gianna", man: "Ozzy" }, { woman: "Hannah", man: "Derrick" }, { woman: "Kam", man: "Edward" }, 
        { woman: "Kari", man: "Andre" }, { woman: "Kathryn", man: "Joey" }, { woman: "Shannon", man: "Tyler" }, 
        { woman: "Taylor", man: "Michael" }, { woman: "Tyranny", man: "Osvaldo" }]
    },    
    {
        week: 4, lights: 4,
        pairs: [{ woman: "Alicia", man: "Edward" }, { woman: "Carolina", man: "Hayden" }, { woman: "Cas", man: "Andre" }, 
        { woman: "Gianna", man: "Derrick" }, { woman: "Hannah", man: "Ozzy" }, { woman: "Kam", man: "Mike" }, 
        { woman: "Kari", man: "Michael" }, { woman: "Kathryn", man: "Joey" }, { woman: "Shannon", man: "Tyler" }, 
        { woman: "Taylor", man: "Osvaldo" }, { woman: "Tyranny", man: "Jaylan" }]
    },    
    {
        week: 5, lights: 4,
        pairs: [{ woman: "Alicia", man: "Mike" }, { woman: "Carolina", man: "Hayden" }, { woman: "Cas", man: "Jaylan" }, 
        { woman: "Gianna", man: "Osvaldo" }, { woman: "Hannah", man: "Ozzy" }, { woman: "Kam", man: "Edward" }, 
        { woman: "Kari", man: "Michael" }, { woman: "Kathryn", man: "Joey" }, { woman: "Shannon", man: "Tyler" }, 
        { woman: "Taylor", man: "Andre" }, { woman: "Tyranny", man: "Derrick" }]
    },    
    {
        week: 6, lights: 4,
        pairs: [{ woman: "Alicia", man: "Mike" }, { woman: "Carolina", man: "Hayden" }, { woman: "Cas", man: "Ozzy" }, 
        { woman: "Gianna", man: "Osvaldo" }, { woman: "Hannah", man: "Jaylan" }, { woman: "Kam", man: "Edward" }, 
        { woman: "Kari", man: "Michael" }, { woman: "Kathryn", man: "Joey" }, { woman: "Shannon", man: "Tyler" }, 
        { woman: "Taylor", man: "Andre" }, { woman: "Tyranny", man: "Derrick" }]
    },    
    {
        week: 7, lights: 4,
        pairs: [{ woman: "Alicia", man: "Ozzy" }, { woman: "Carolina", man: "Hayden" }, { woman: "Cas", man: "Andre" }, 
        { woman: "Gianna", man: "Mike" }, { woman: "Hannah", man: "Michael" }, { woman: "Kam", man: "Edward" }, 
        { woman: "Kari", man: "Derrick" }, { woman: "Kathryn", man: "Joey" }, { woman: "Shannon", man: "Tyler" }, 
        { woman: "Taylor", man: "Osvaldo" }, { woman: "Tyranny", man: "Jaylan" }]
    },    
    {
        week: 8, lights: 5,
        pairs: [{ woman: "Alicia", man: "Ozzy" }, { woman: "Carolina", man: "Hayden" }, { woman: "Cas", man: "Joey" }, 
        { woman: "Gianna", man: "Andre" }, { woman: "Hannah", man: "Tyler" }, { woman: "Kam", man: "Edward" }, 
        { woman: "Kari", man: "Mike" }, { woman: "Kathryn", man: "Michael" }, { woman: "Shannon", man: "Derrick" }, 
        { woman: "Taylor", man: "Osvaldo" }, { woman: "Tyranny", man: "Jaylan" }]
    }
];

module.exports = {
    initialContestants,
    initialMatchingCeremonies,
    initialTruthBooths
};

