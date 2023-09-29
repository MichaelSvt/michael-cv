

// *************************************************************************
// *************************************************************************
// ********************  HUJI DROP DOWN FOR GRADES  ************************
// *************************************************************************
// *************************************************************************


const huji_courses = document.createElement('table');
huji_courses.id = 'huji_courses';
huji_courses.classList.add('huji_courses');


// #1 COURSE - NAND TO TETRIS
const nand_to_tetris_row = document.createElement('tr');

const nand_to_tetris_name = document.createElement('td');
nand_to_tetris_name.classList.add('course-name');
nand_to_tetris_name.textContent = "NAND to Tetris";
nand_to_tetris_row.appendChild(nand_to_tetris_name);

const nand_to_tetris_grade = document.createElement('td');
nand_to_tetris_grade.classList.add('course-grade');
nand_to_tetris_grade.textContent = " - 94";
nand_to_tetris_row.appendChild(nand_to_tetris_grade);

huji_courses.appendChild(nand_to_tetris_row);

// #2 COURSE - NAND TO TETRIS
const logic_row = document.createElement('tr');

const logic_name = document.createElement('td');
logic_name.classList.add('course-name');
logic_name.textContent = "Intro to Logic";
logic_row.appendChild(logic_name);

const logic_grade = document.createElement('td');
logic_grade.classList.add('course-grade');
logic_grade.textContent = " - 96";
logic_row.appendChild(logic_grade);

huji_courses.appendChild(logic_row);

// #3 COURSE - Infinitesimal Calculus 2
const infi2_row = document.createElement('tr');

const infi2_name = document.createElement('td');
infi2_name.classList.add('course-name');
infi2_name.textContent = "Infinitesimal Calculus 2";
infi2_row.appendChild(infi2_name);

const infi2_grade = document.createElement('td');
infi2_grade.classList.add('course-grade');
infi2_grade.textContent = " - 85";
infi2_row.appendChild(infi2_grade);

huji_courses.appendChild(infi2_row);

// #4 COURSE - Infinitesimal Calculus 2
const c_row = document.createElement('tr');

const c_name = document.createElement('td');
c_name.classList.add('course-name');
c_name.textContent = "Programming workshop in C & C++";
c_row.appendChild(c_name);

const c_grade = document.createElement('td');
c_grade.classList.add('course-grade');
c_grade.textContent = " - 81";
c_row.appendChild(c_grade);

huji_courses.appendChild(c_row);

// #5 COURSE - Infinitesimal Calculus 2
const algo_row = document.createElement('tr');

const algo_name = document.createElement('td');
algo_name.classList.add('course-name');
algo_name.textContent = "Algorithms";
algo_row.appendChild(algo_name);

const algo_grade = document.createElement('td');
algo_grade.classList.add('course-grade');
algo_grade.textContent = " - 97";
algo_row.appendChild(algo_grade);

huji_courses.appendChild(algo_row);

// #6 COURSE - Infinitesimal Calculus 2
const hedva_row = document.createElement('tr');

const hedva_name = document.createElement('td');
hedva_name.classList.add('course-name');
hedva_name.textContent = "Calculus for CS";
hedva_row.appendChild(hedva_name);

const hedva_grade = document.createElement('td');
hedva_grade.classList.add('course-grade');
hedva_grade.textContent = " - 88";
hedva_row.appendChild(hedva_grade);

huji_courses.appendChild(hedva_row);

// #7 COURSE - Infinitesimal Calculus 2
const prob_row = document.createElement('tr');

const prob_name = document.createElement('td');
prob_name.classList.add('course-name');
prob_name.textContent = "Intro To Probability and Statistics";
prob_row.appendChild(prob_name);

const prob_grade = document.createElement('td');
prob_grade.classList.add('course-grade');
prob_grade.textContent = " - 92";
prob_row.appendChild(prob_grade);

huji_courses.appendChild(prob_row);

// #8 COURSE - Infinitesimal Calculus 2
const oop_row = document.createElement('tr');

const oop_name = document.createElement('td');
oop_name.classList.add('course-name');
oop_name.textContent = "Object Oriented Programming";
oop_row.appendChild(oop_name);

const oop_grade = document.createElement('td');
oop_grade.classList.add('course-grade');
oop_grade.textContent = " - 92";
oop_row.appendChild(oop_grade);

huji_courses.appendChild(oop_row);

// #9 COURSE - Infinitesimal Calculus 2
const comp_row = document.createElement('tr');

const comp_name = document.createElement('td');
comp_name.classList.add('course-name');
comp_name.textContent = "Computational Models, Computability and Complexity";
comp_row.appendChild(comp_name);

const comp_grade = document.createElement('td');
comp_grade.classList.add('course-grade');
comp_grade.textContent = " - 100";
comp_row.appendChild(comp_grade);

huji_courses.appendChild(comp_row);

// #10 COURSE - Infinitesimal Calculus 2
const netw_row = document.createElement('tr');

const netw_name = document.createElement('td');
netw_name.classList.add('course-name');
netw_name.textContent = "Intro To Communication Networks";
netw_row.appendChild(netw_name);

const netw_grade = document.createElement('td');
netw_grade.classList.add('course-grade');
netw_grade.textContent = " - 88";
netw_row.appendChild(netw_grade);

huji_courses.appendChild(netw_row);

// #11 COURSE - Infinitesimal Calculus 2
const img_row = document.createElement('tr');

const img_name = document.createElement('td');
img_name.classList.add('course-name');
img_name.textContent = "Image Processing";
img_row.appendChild(img_name);

const img_grade = document.createElement('td');
img_grade.classList.add('course-grade');
img_grade.textContent = " - 100";
img_row.appendChild(img_grade);

huji_courses.appendChild(img_row);

// #12 COURSE - Infinitesimal Calculus 2
const law_row = document.createElement('tr');

const law_name = document.createElement('td');
law_name.classList.add('course-name');
law_name.textContent = "Law & Society";
law_row.appendChild(law_name);

const law_grade = document.createElement('td');
law_grade.classList.add('course-grade');
law_grade.textContent = " - 82";
law_row.appendChild(law_grade);

huji_courses.appendChild(law_row);

// #13 COURSE - Infinitesimal Calculus 2
const crypto_row = document.createElement('tr');

const crypto_name = document.createElement('td');
crypto_name.classList.add('course-name');
crypto_name.textContent = "Intro to Cryptography and Software Security";
crypto_row.appendChild(crypto_name);

const crypto_grade = document.createElement('td');
crypto_grade.classList.add('course-grade');
crypto_grade.textContent = " - 85";
crypto_row.appendChild(crypto_grade);

huji_courses.appendChild(crypto_row);

// #14 COURSE - Infinitesimal Calculus 2
const db_row = document.createElement('tr');

const db_name = document.createElement('td');
db_name.classList.add('course-name');
db_name.textContent = "Databases";
db_row.appendChild(db_name);

const db_grade = document.createElement('td');
db_grade.classList.add('course-grade');
db_grade.textContent = " - 99";
db_row.appendChild(db_grade);

huji_courses.appendChild(db_row);

// #15 COURSE - Infinitesimal Calculus 2
const iml_row = document.createElement('tr');

const iml_name = document.createElement('td');
iml_name.classList.add('course-name');
iml_name.textContent = "Intro To Machine Learning";
iml_row.appendChild(iml_name);

const iml_grade = document.createElement('td');
iml_grade.classList.add('course-grade');
iml_grade.textContent = " - 93";
iml_row.appendChild(iml_grade);

huji_courses.appendChild(iml_row);

// #16 COURSE - Infinitesimal Calculus 2
const os_row = document.createElement('tr');

const os_name = document.createElement('td');
os_name.classList.add('course-name');
os_name.textContent = "Operating Systems";
os_row.appendChild(os_name);

const os_grade = document.createElement('td');
os_grade.classList.add('course-grade');
os_grade.textContent = " - 93";
os_row.appendChild(os_grade);

huji_courses.appendChild(os_row);

// #17 COURSE - Infinitesimal Calculus 2
const crit_row = document.createElement('tr');

const crit_name = document.createElement('td');
crit_name.classList.add('course-name');
crit_name.textContent = "Critical Thinking";
crit_row.appendChild(crit_name);

const crit_grade = document.createElement('td');
crit_grade.classList.add('course-grade');
crit_grade.textContent = " - 98";
crit_row.appendChild(crit_grade);

huji_courses.appendChild(crit_row);


const huji = document.querySelector('#huji');
huji.onclick = expand_huji;
const huji_courses_div = document.querySelector('#huji-courses-div');

function expand_huji() {
    // huji.appendChild(huji_courses);   // then adding the new div to the container
    huji_courses_div.appendChild(huji_courses); 
    huji.onclick = reduce_huji;
}

function reduce_huji() {
    huji_courses_div.removeChild(huji_courses);
    huji.onclick = expand_huji;
}

// *************************************************************************
// *************************************************************************
// ******************  END OF HUJI DROP DOWN FOR GRADES  *******************
// *************************************************************************
// *************************************************************************


// *************************************************************************
// *************************************************************************
// *******************  OPEN UNI DROP DOWN FOR GRADES  *********************
// *************************************************************************
// *************************************************************************

const open_courses = document.createElement('table');
open_courses.id = 'open_courses';
open_courses.classList.add('open_courses');


// #1 COURSE - Introduction to Computer Science
const cs_intro_row = document.createElement('tr');

const cs_intro_name = document.createElement('td');
cs_intro_name.classList.add('course-name');
cs_intro_name.textContent = "Introduction to Computer Science";
cs_intro_row.appendChild(cs_intro_name);

const cs_intro_grade = document.createElement('td');
cs_intro_grade.classList.add('course-grade');
cs_intro_grade.textContent = " - 92";
cs_intro_row.appendChild(cs_intro_grade);

open_courses.appendChild(cs_intro_row);

// #2 COURSE - Introduction to Computer Science
const disc_row = document.createElement('tr');

const disc_name = document.createElement('td');
disc_name.classList.add('course-name');
disc_name.textContent = "Discrete Mathematics";
disc_row.appendChild(disc_name);

const disc_grade = document.createElement('td');
disc_grade.classList.add('course-grade');
disc_grade.textContent = " - 98";
disc_row.appendChild(disc_grade);

open_courses.appendChild(disc_row);

// #3 COURSE - Introduction to Computer Science
const lin1_row = document.createElement('tr');

const lin1_name = document.createElement('td');
lin1_name.classList.add('course-name');
lin1_name.textContent = "Linear Algebra 1";
lin1_row.appendChild(lin1_name);

const lin1_grade = document.createElement('td');
lin1_grade.classList.add('course-grade');
lin1_grade.textContent = " - 80";
lin1_row.appendChild(lin1_grade);

open_courses.appendChild(lin1_row);

// #4 COURSE - Introduction to Computer Science
const infi1_row = document.createElement('tr');

const infi1_name = document.createElement('td');
infi1_name.classList.add('course-name');
infi1_name.textContent = "Infinitesimal Calculus 1";
infi1_row.appendChild(infi1_name);

const infi1_grade = document.createElement('td');
infi1_grade.classList.add('course-grade');
infi1_grade.textContent = " - 90";
infi1_row.appendChild(infi1_grade);

open_courses.appendChild(infi1_row);

// #5 COURSE - Introduction to Computer Science
const lin2_row = document.createElement('tr');

const lin2_name = document.createElement('td');
lin2_name.classList.add('course-name');
lin2_name.textContent = "Linear Algebra 2";
lin2_row.appendChild(lin2_name);

const lin2_grade = document.createElement('td');
lin2_grade.classList.add('course-grade');
lin2_grade.textContent = " - 89";
lin2_row.appendChild(lin2_grade);

open_courses.appendChild(lin2_row);

// #6 COURSE - Introduction to Computer Science
const dast_row = document.createElement('tr');

const dast_name = document.createElement('td');
dast_name.classList.add('course-name');
dast_name.textContent = "Data Structures";
dast_row.appendChild(dast_name);

const dast_grade = document.createElement('td');
dast_grade.classList.add('course-grade');
dast_grade.textContent = " - 87";
dast_row.appendChild(dast_grade);

open_courses.appendChild(dast_row);


const uni_open = document.querySelector('#open-uni');
uni_open.onclick = expand_open_uni;

const open_courses_div = document.querySelector('#open-courses-div');

function expand_open_uni() {
    open_courses_div.appendChild(open_courses); 
    uni_open.onclick = reduce_open_uni;
}

function reduce_open_uni() {
    open_courses_div.removeChild(open_courses);
    uni_open.onclick = expand_open_uni;
}


// *************************************************************************
// *************************************************************************
// ****************  END OF OPEN UNI DROP DOWN FOR GRADES  *****************
// *************************************************************************
// *************************************************************************



// *************************************************************************
// *************************************************************************
// *********************  DROP DOWN FOR PROJECT 1  *************************
// *************************************************************************
// *************************************************************************


const proj1_description = document.createElement('p');
proj1_description.textContent = "Processing and analayzing hyperspectral images from the \
“Beresheet 2” orbiter with the intention of discovering and classifying different \
materials and objects on the surface of the moon. Using a semi-supervised approach, \
first we divided each image to several clusters and then assigned a label to each cluster."; 

const proj1_skills = document.createElement('p');
proj1_skills.textContent = `Skills: python libraries such as numpy, sklearn and more.`; 

const proj_1 = document.querySelector('.proj1');
const proj1_title = document.querySelector('#proj1-title');
proj1_title.onclick = expand_proj1;

function expand_proj1() {
    proj_1.appendChild(proj1_description); 
    proj_1.appendChild(proj1_skills); 
    proj1_title.onclick = reduce_proj1;
}

function reduce_proj1() {
    proj_1.removeChild(proj1_skills);
    proj_1.removeChild(proj1_description);
    proj1_title.onclick = expand_proj1;
}

// *************************************************************************
// *************************************************************************
// ******************  END OF DROP DOWN FOR PROJECT 1  *********************
// *************************************************************************
// *************************************************************************

// *************************************************************************
// *************************************************************************
// *********************  DROP DOWN FOR PROJECT 2  *************************
// *************************************************************************
// *************************************************************************

const proj2_description = document.createElement('p');
proj2_description.textContent = "Developing a predictive model to forecast booking cancellations. \
dividing the work into two main parts. The first phase revolved around the data, exploring \
feature correlations, eliminating redundancies, and crafting new features using various techniques.\
 The second phase focused on model selection, evaluating various models using different metrics."; 

const proj2_skills = document.createElement('p');
proj2_skills.textContent = `Skills: python libraries such as numpy, sklearn, pandas and more.`; 

const proj_2 = document.querySelector('.proj2');
const proj2_title = document.querySelector('#proj2-title');
proj2_title.onclick = expand_proj2;

function expand_proj2() {
    proj_2.appendChild(proj2_description); 
    proj_2.appendChild(proj2_skills); 
    proj2_title.onclick = reduce_proj2;
}

function reduce_proj2() {
    proj_2.removeChild(proj2_skills);
    proj_2.removeChild(proj2_description);
    proj2_title.onclick = expand_proj2;
}

// *************************************************************************
// *************************************************************************
// ******************  END OF DROP DOWN FOR PROJECT 2  *********************
// *************************************************************************
// *************************************************************************


// *************************************************************************
// *************************************************************************
// *********************  DROP DOWN FOR PROJECT 3  *************************
// *************************************************************************
// *************************************************************************

const proj3_description = document.createElement('p');
proj3_description.textContent = `In the "NAND To Tetris" course, I developed a compiler which 
translated a programming language into virtual machine language and further into assembly 
and machine code. Additionally, I implemented key operatingsystem functionalities, such as 
memory allocation, screen output, and keyboard input. This experience provided a deep 
understanding of computer architecture and the layers of abstraction in modern computing systems.`; 

const proj3_skills = document.createElement('p');
proj3_skills.textContent = `Skills: Computer architecture, Memory management, Operating systems.`; 

const proj_3 = document.querySelector('.proj3');
const proj3_title = document.querySelector('#proj3-title');
proj3_title.onclick = expand_proj3;

function expand_proj3() {
    proj_3.appendChild(proj3_description); 
    proj_3.appendChild(proj3_skills); 
    proj3_title.onclick = reduce_proj3;
}

function reduce_proj3() {
    proj_3.removeChild(proj3_skills);
    proj_3.removeChild(proj3_description);
    proj3_title.onclick = expand_proj3;
}

// *************************************************************************
// *************************************************************************
// ******************  END OF DROP DOWN FOR PROJECT 3  *********************
// *************************************************************************
// *************************************************************************



// *************************************************************************
// *************************************************************************
// *********************  DROP DOWN FOR PROJECT 4  *************************
// *************************************************************************
// *************************************************************************

const proj4_description = document.createElement('p');
proj4_description.textContent = `As the final project of my practical engineering studies 
I designed and implemented a direction indication system consisting of 2 units which 
communicated wirelessly. The first unit determined the direction, while the second was 
responsible for displaying the gathered data. Working on this project allowed me to apply 
my knowledge of software and hardware development and gain familiarity with different 
technologies and protocols`; 

// const proj4_skills = document.createElement('p');
// proj4_skills.textContent = `Skills: Hardware programming, Memory management, Operating systems.`; 

const proj_4 = document.querySelector('.proj4');
const proj4_title = document.querySelector('#proj4-title');
proj4_title.onclick = expand_proj4;

function expand_proj4() {
    proj_4.appendChild(proj4_description); 
    // proj_4.appendChild(proj4_skills); 
    proj4_title.onclick = reduce_proj4;
}

function reduce_proj4() {
    // proj_4.removeChild(proj4_skills);
    proj_4.removeChild(proj4_description);
    proj4_title.onclick = expand_proj4;
}

// *************************************************************************
// *************************************************************************
// ******************  END OF DROP DOWN FOR PROJECT 4  *********************
// *************************************************************************
// *************************************************************************


// *************************************************************************
// *************************************************************************
// ********************  DROP DOWN FOR EXPERIENCE 1  ***********************
// *************************************************************************
// *************************************************************************

const exp1_description = document.createElement('p');
exp1_description.textContent = `In my role as an EW technician, I was responsible 
for testing, assimilating, maintaining, and operating 
state of the art military technologies.`; 


const exp1 = document.querySelector('.exp1');
const exp1_title = document.querySelector('#exp1-title');
exp1_title.onclick = expand_exp1;

function expand_exp1() {
    exp1.appendChild(exp1_description); 
    exp1_title.onclick = reduce_exp1;
}

function reduce_exp1() {
    exp1.removeChild(exp1_description);
    exp1_title.onclick = expand_exp1;
}

// *************************************************************************
// *************************************************************************
// *****************  END OF DROP DOWN FOR EXPERIENCE 1  *******************
// *************************************************************************
// *************************************************************************

// *************************************************************************
// *************************************************************************
// ********************  DROP DOWN FOR EXPERIENCE 2  ***********************
// *************************************************************************
// *************************************************************************

const exp2_description = document.createElement('p');
exp2_description.textContent = `As a Platoon Commander I oversaw the training of 
new recruits, preparing them for the military culture and their duties as EW technicians. 
Through this role I improved my leadership skills and my ability to work in a team and to manage a team.`; 


const exp2 = document.querySelector('.exp2');
const exp2_title = document.querySelector('#exp2-title');
exp2_title.onclick = expand_exp2;

function expand_exp2() {
    exp2.appendChild(exp2_description); 
    exp2_title.onclick = reduce_exp2;
}

function reduce_exp2() {
    exp2.removeChild(exp2_description);
    exp2_title.onclick = expand_exp2;
}

// *************************************************************************
// *************************************************************************
// *****************  END OF DROP DOWN FOR EXPERIENCE 2  *******************
// *************************************************************************
// *************************************************************************


// *************************************************************************
// *************************************************************************
// ********************  DROP DOWN FOR ORGANIZATION 1  *********************
// *************************************************************************
// *************************************************************************

const org1_description = document.createElement('p');
org1_description.textContent = `The program provides workshops and tools for 
personal and professional development for talented students with a challenging background.`; 

const org1 = document.querySelector('.org1');
const org1_title = document.querySelector('#org1-title');
org1_title.onclick = expand_org1;

function expand_org1() {
    org1.appendChild(org1_description); 
    org1_title.onclick = reduce_org1;
}

function reduce_org1() {
    org1.removeChild(org1_description);
    org1_title.onclick = expand_org1;
}

// *************************************************************************
// *************************************************************************
// *****************  END OF DROP DOWN FOR ORGANIZATION 1  *****************
// *************************************************************************
// *************************************************************************


// *************************************************************************
// *************************************************************************
// ********************  DROP DOWN FOR ORGANIZATION 2  *********************
// *************************************************************************
// *************************************************************************

const org2_description = document.createElement('p');
org2_description.textContent = `Intellectual Journeys - a unique program of intellectual 
enrichment in the humanities and social sciences. The program aims to foster skills such 
as observation, critical thinking and analyzing deep philosophical subjects as
well as current day issues.`; 

const org2 = document.querySelector('.org2');
const org2_title = document.querySelector('#org2-title');
org2_title.onclick = expand_org2;

function expand_org2() {
    org2.appendChild(org2_description); 
    org2_title.onclick = reduce_org2;
}

function reduce_org2() {
    org2.removeChild(org2_description);
    org2_title.onclick = expand_org2;
}

// *************************************************************************
// *************************************************************************
// *****************  END OF DROP DOWN FOR ORGANIZATION 2  *****************
// *************************************************************************
// *************************************************************************
