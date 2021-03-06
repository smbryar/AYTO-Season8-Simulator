const { lockInPair } = require('../alterState/lockInPair');

export function copyMatchingCeremonies (ceremonies) {
    return ceremonies.map(ceremony => {
        return {
            week: ceremony.week,
            lights: ceremony.lights,
            pairs: ceremony.pairs.map(pair => pair = {woman: pair.woman, man: pair.man})
        };
    })
}

export function copyContestants(contestants) {
    const women = [...contestants.women];
    const men = [...contestants.men];
    return {women, men};
}

export function copyTruthBooths (truthBooths) {
    return truthBooths.map(booth => booth = {week: booth.week, woman: booth.woman, man: booth.man, correct: booth.correct})
  }

export function initialiseState (initialContestants,initialTruthBooths,initialMatchingCeremonies) {
    let solution = [];
    let remainingContestants = copyContestants(initialContestants);
    let knownTrues = initialTruthBooths.reduce((arr,booth) => booth.correct ? [...arr,{woman: booth.woman, man:booth.man}] : arr,[])
    let knownFalses = initialTruthBooths.reduce((arr,booth) => !booth.correct ? [...arr,{woman: booth.woman, man:booth.man}] : arr,[])
    let matchingCeremonies = copyMatchingCeremonies(initialMatchingCeremonies);

    // Known trues

    for (let i=0; i<knownTrues.length; i++) {
        lockInPair(knownTrues[i], matchingCeremonies, solution, remainingContestants)
    }

    return {remainingContestants, knownFalses, knownTrues, matchingCeremonies, solution}
}