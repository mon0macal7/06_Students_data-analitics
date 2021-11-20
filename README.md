# 06_Students_data-analitics

![gaming](https://media.giphy.com/media/UEGwYCVTBFa9tJEf66/giphy.gif)

Every day we generate 2.5 trillion bytes of data, an unprecedented number. However, data alone is of little use. To transform data into information we need to process and understand it. A very simple way to do this is by creating visualizations. Today's leading companies generate dynamic visualizations of their data that allow them to better understand their business and make appropriate decisions. In this project you will have your first approach to transforming data into information by creating your first **data dashboard** . If we think of a dashboard we can think as a control board of a car or an airplane. A space from which a user can have access to the most relevant information and controls, in this case, of the vehicle he is using. The dashboard of a car allows the driver to know how fast he is going, what gear / speed he is using, how much fuel he has available, what is the temperature of the engine, how many revolutions per minute the wheels make, how much distance he has traveled, etc... Like this a data dashboard should allow the users to see the important info and the numbers that matters.

---
Índice

    1. Description
    2. User Definition & User Stories (UX)
    3. Aceptance Criteria
    4. Technical Requirements
    5. Hacker edition
    6. Expected Learning Outcomes
---

## 1. Description
Web Application to see a Data Dashboard to show the students information data of a Coding Bootcamp School specially the  students progress on the study platform.
## 2. User Definition:
**User: Headmaster bootcamp school to analyze and interpret the data of the students**
## User Stories:

The interface should allow the user:
* Show a login with the Bootcamp School logo for the school headmaster.
* Have a first view listing the 3 locations of Bootcamp school and by clicking on each showing the branch page.
* Show the info only for that branch on this separated view, this view should have the name of branch and a piture of the location as well, show also the generations available to click on and find the students registered for each generation.
  * For each generation:
  * Show how many students were registered in cards
  * Filter and be able to search for students by name
  * Show generation percentage average of progress of completion
  * Show to indentify students with bellow 60 percentage
  * Show to identify students with 90 or more of competion percentage.
  * List and be able to select students showing general percentage of completion of each student, ordered by name alphabetically.
    * For each student:
    * Be able to click on to show progress report:
      * Show percent complete for all topics
      * Calculate percentage of time completed for each topic
      * List subtopics for each topic
      * Ability to filter completed and non-completed subtopics of each topic
      * Be able to filter subtopics by type (exercises, readings and quizzes)
## 3. Acceptance Criteria
* Use the interface without problems from different screen sizes: mobiles, tablets, desktops
* Perform unit tests for "pure functions"
* Cover all the US
* Hacker Edition
---

## 4. Technical Requeriments /

- Pair team programming
- Fork this repository and clone your own, choose who will be the owner of the repository of the pair team.
- Start working doing ` npm init `
- Set a .gitignore file to avoid the node_modules to be uploaded in GitHub.
- Create the Release branch (to deliver and deploy) and the Development branch (to work on it daily).
- Make a full responsive website considering responsive site for all devices.
- Follow up Semantic HTML rules, have header, navigation bar, main, sections, asides, footer, etc.
- Create an Assets folder to store the assets of the site.
- Document every Agile SDLC steps on ReadMe.md. During the planning step document a screenshot of your Backlog & the prioritized agenda per each one.
- Use Bootstrap Framework to speed your UI coding. Bootstrap is the unique library allowed.
- Two sprints of one week each one with Bilingual demo on Thursdays by 10am.
- For the second Demo, be ready to have testing users that will test your product and see your demo.

In classroom:
- Install a testing framework.
- Install dependencies with ` npm install `
- Plan and execute Unit Testing
- Run Unit testing with ` npm test `

The _boilerplate_ should contains a file structure as a starting point like thisas all the sample dependencies and tests configuration:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── assets
└── data
    ├── students.json
├── src
│   ├── app.js
│   ├── data.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── app.spec.js
    └── index.html
```
### Scripts / Files

* `README.md`: should explain how to download, install and run the application as well as an introduction to the application, its functionality and decisions about design they took.
* `assets /`: Should contain your assets like images, logos, etc.
* `src / index.html`: this is the entry point to your application. This file must contain to _markup_ (HTML) and include the necessary CSS and JavaScript for index.js module.
* `src / app.js`: here you must implement the web application main functionality to manipulate the data coming from data.js
* `src / data.js`: here you must fetch/get the data from the local JSON and then export it to be used in the app.js module.
* `src / index.js`: here you must listen to DOM events, like create and add events to the DOM and get the search values to be processed to app.js.
* `test / app.spec.js`: this file contains some sample tests and here you will have to implement the tests.

**CLUES:**

You have to identify first the data types that are content on the json and know how to access to it, if is an array, an object, an string. Identify the json data structure and determine how to iterate it to access into.

- [Use a JSON viewer browser extension to see the data magically ordered](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh)
- [Check the array iteration methods](https://www.youtube.com/watch?v=Urwzk6ILvPQ)
- [Check the object methods](https://www.youtube.com/watch?v=kL9bC-e5UeE)
- [Check the essential array methods ](https://www.youtube.com/watch?v=5yPf74sCu2k)
- [Learn how to get Multiple CSS + HTML pagination ](https://www.youtube.com/watch?v=iXSSHlOe47s)

**Additional Resources**

These are some tips that can help you in organizing and carrying out your project, taking into account the development of your _soft skills_:

* To start an organization of your project, see with what resources
  accounts and the time you have to complete it.
* If there is something that you do not know, ask and try to solve it; you can start with
  a google search, then consulting your squad and finally your coach. 
  If there is something that I do not know, someone else can help me. Learning is a
  collaborative process.
* Once you start to move forward ask for feedback, your colleagues may have
  excellent ideas or ways to solve the project that can help you.
* When you run into a problem, look for alternatives, and for that, consult
  different sources.
* If you already see yourself investing a lot of time in details, you should know how to prioritize and
  stick with the most important, projects have limited time and you must
  know how to manage it.
* Work as a team, ask questions and try to complete the project without giving up.
* Prepare your presentation, if I cannot communicate my ideas to others I do not know
  You will appreciate all the effort and work you put into it.

---

## 5. Hacker Edition

---

You are not limited to implementing only the mandatory part. You can add also other nice to have functionalities on this web application, like a alphabetic filter by names like an agenda, while clicking on each letter, should show the student data in cards as well.

---
##  6. Expected Learning Outcomes

---
- [ ] npm init 
- [ ] JSON 
- [ ] fetch() method
- [ ] promises in JavaScript 
- [ ] iterate data
- [ ] array methods and iterators
- [ ] object iterators and key finders
- [ ] import & export modules
- [ ] My first Unitary Testing
- [ ] GitHub Branch Modeling > Development > Release 

---
# ReadMe

---
> This Readme should be replaced with the project documentation following the SDLC procedures for Agile Software Development Lyfe Cycle.


