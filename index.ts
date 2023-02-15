
// Question 1 Recursive Solution

const C = 5; // applause earned from playing Chorus 
const j = [0, 1, 2, 3, 4]; // j[i] = applause earned if ending measure == i

const k = [1, 1, 2, 3, 4]; // k[i] = if ending on measure i must play for k[i] measures
const s = [5, 5, 5, 5, 5]; // applause earned from playing solo if ending measure == i


function max_applause (n: number): number { // returns maximum applause obtainable in n measures
  if (n <= 0) {
    return 0;
  }
  if (n > j.length) {
    return max_applause(j.length);
  }

  let if_riff = j[n - 1] + max_applause( n - 1);
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

function max_applause_dynamic(n: number) { // returns maximum applause obtainable in n measures

}

// Question 2 Recursive Solution.
// one community service project per semester

// S students who want to volunteer , Each student can only participate in 1 project per semester
// B buses to help move them
// F projects under consideration p[i] requires s[i] students and b[i] buses. generates g[i] > 0 units for the university
type project = {
  students: number,
  buses: number,
  units: number
}

let p1: project = {students: 1, buses: 1, units: 1};
let p2: project = {students: 4, buses: 2, units: 2};
let p3: project = {students: 5, buses: 2, units: 3};
let S: number = 6;
let B: number = 3;

let input_projects: project[] = [p1, p2, p3];



function max_community_credit(students: number, buses: number, projects: project[]): number { // returns the maximum amount of community credit attainable with S students and B buses in projects
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


function max_community_credit_dynamic() {

}

// Question 3 Recursive Solution.
const M = 90; // Max time per lecture
let topic_times: number[] = [45, 30, 15, 60, 25];
// Use at most M minutes PER LECTURE
// Teach all n topics in order; Ex. 1 before 3.
// Allocate topic i t[i] minutes
// Topics cannot run into another lecture time: all t[i] <= M
// As many lectures as we want

// students recieve E[i, j] engagement when topics i -> j are covered in the same lecture
// E[i, j] = -infinity whenever topics i -> j do not fit into a single lecture spot.

// Given Topic_Time_List and Engagement_Matrix[i,j] return maximum total engagement by teaching all n topics in order, without exceeding M minutes per lecture.

function maximize_lecture_engagement (topic_list: number[], lec_time: number) {
  if (topic_list.length == 0) {
    return 0;
  }

  let add_to_lecture = null;

}