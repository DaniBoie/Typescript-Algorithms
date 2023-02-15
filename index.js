"use strict";
// Recursive Solution
const C = 5; // applause earned from playing Chorus 
const j = [0, 1, 2, 3, 4]; // j[i] = applause earned if ending measure == i
const k = [1, 1, 2, 3, 4]; // k[i] = if ending on measure i must play for k[i] measures
const s = [5, 5, 5, 5, 5]; // applause earned from playing solo if ending measure == i
function max_applause(n) {
    if (n <= 0) {
        return 0;
    }
    if (n > j.length) {
        return max_applause(j.length);
    }
    let if_riff = j[n - 1] + max_applause(n - 1);
    let if_chorus = C + max_applause(n - 2);
    let if_solo = s[n - 1] + max_applause(n - k[n - 1]);
    return Math.max(if_riff, if_chorus, if_solo);
}
console.log(max_applause(5));
// at each measure we can use only one move
// Jazzy Riff : played for 1 measure , until end of measure t . Awards j[t] applause
// Instrumental Chorus: played for 2 measures , until end of measure t . Awards C applause
// Solo : played for k[t] measures , until end of measure t . Awards s[t] applause
// Iterative Solution
function max_applause_dynamic(n) {
}
let p1 = { students: 1, buses: 1, units: 1 };
let p2 = { students: 4, buses: 2, units: 2 };
let p3 = { students: 5, buses: 2, units: 3 };
let S = 6;
let B = 3;
let input_projects = [p1, p2, p3];
function max_community_credit(students, buses, projects) {
    if (projects.length == 0) {
        return 0;
    }
    let if_not_taken = max_community_credit(students, buses, projects.slice(1));
    if (students - projects[0].students < 0) {
        return if_not_taken;
    }
    let if_taken = projects[0].units + max_community_credit(students - projects[0].students, buses - projects[0].buses, projects.slice(1));
    return Math.max(if_taken, if_not_taken);
}
console.log(max_community_credit(S, B, input_projects));
