"use strict";
// Question 1 Recursive Solution
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
    let max_applause_matrix = [];
    max_applause_matrix[0] = 0;
    for (let i = 1; i < n + 1; i++) {
        let if_riff = j[i - 1] + max_applause_matrix[i - 1];
        let if_chorus;
        if (i - 2 < 0) {
            if_chorus = 0;
        }
        else {
            if_chorus = C + max_applause_matrix[i - 2];
        }
        let if_solo = s[i - 1] + max_applause_matrix[i - k[i - 1]];
        max_applause_matrix[i] = Math.max(if_riff, if_chorus, if_solo);
    }
    return max_applause_matrix;
}
let result = max_applause_dynamic(5);
console.log(result, result[5]);
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
function max_community_credit_dynamic(students, buses) {
    // let returnMatrix: number[][];
    // for (let i = 0; i < students; i++) {
    //   for (let j = 0; j < buses; j++) {
    //   }
    // }
}
// Question 3 Recursive Solution.
const M = 90; // Max time per lecture
let topic_times = [45, 30, 15, 60, 25];
// Use at most M minutes PER LECTURE
// Teach all n topics in order; Ex. 1 before 3.
// Allocate topic i t[i] minutes
// Topics cannot run into another lecture time: all t[i] <= M
// As many lectures as we want
// students recieve E[i, j] engagement when topics i -> j are covered in the same lecture
// E[i, j] = -infinity whenever topics i -> j do not fit into a single lecture spot.
// Given Topic_Time_List and Engagement_Matrix[i,j] return maximum total engagement by teaching all n topics in order, without exceeding M minutes per lecture.
function maximize_lecture_engagement(topic_list, lec_time) {
    if (topic_list.length == 0) {
        return 0;
    }
    let add_to_lecture = null;
}
