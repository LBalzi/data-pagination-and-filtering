/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
The showPage function renders the page requested by the user based on the button that was clicked.
Data is pulled from an array of objects and displayed on the html page with a template literal
*/
function showPage(list, page) {
    let startIndex = (page * 8) - 8;
    let endIndex = page * 8;
    let studentList = document.querySelector(".student-list");
    studentList.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
       if (i >= startIndex && i <= endIndex) {
          const html = `<li class="student-item cf">
                      <div class="student-details"> 
                      <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
                      <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
                      <span class="email">${list[i].email}</span>
                         </div>
                      <div class="joined-details">
                      <span class="date">Joined ${list[i].registered.date}</span>
                         </div>
                      </li>`
          studentList.insertAdjacentHTML("beforeend", html);   
    
        };
    
    };
 };
 /*
 The function addPagination adds the buttons at the bottom of the page dynamically based on
 how many students there are and how many we want to show on the page (in this case 9)
 */
 function addPagination(list) {
    let numOfPages = Math.ceil(list.length / 9);
    let linkList = document.querySelector(".link-list");
    linkList.innerHTML = '';
    for (let i = 1; i <= numOfPages; i++) {
     let button =  `<li>
       <button type="button">${i}</button>
       </li>`;
       linkList.insertAdjacentHTML("beforeend", button);
    }
       let firstButton = document.querySelector('li');
       firstButton.classList.add("active");
       showPage(data, 1);
 /*
 The event listener lets the user click on the various buttons, records which one was pressed
 and calls the showPage function based on which page the users wants to see
 */
 
       linkList.addEventListener("click", (e) => {
          if (e.target.tagName === "BUTTON") {
             let activeButton = document.querySelector('.active');
             activeButton.className = '';
             const buttonClicked = e.target.closest('button');
             buttonClicked.className = 'active';
             showPage(data, buttonClicked.textContent);
 
          };
       });
    };
 
    
 
 addPagination(data);
 
   