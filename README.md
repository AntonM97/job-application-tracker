# job-application-tracker
App helps to track job application, shows some basic statistics on applications

[How to open](#How-to-open)

[Prompt for creation](#Prompt-for-creation)

[Tech stack](#Tech-stack)

# How to open
Option C: Using your IDE (IntelliJ IDEA, Eclipse, etc.)

1. Open the project in your IDE

2. Locate JobApplicationApplication.java

3. Right-click and select Run 'JobApplicationApplication.main()' or click the green play button

Open your browser and navigate to:
- Kanban Board: http://localhost:8080/kanban-board or http://localhost:8080/
- Statistics Page: http://localhost:8080/statistics


# Prompt for creation
I want create job application tracker. Tech stack of java spring boot, maven nature of the project, For that I want you FIRST to create responsive UI(HTML5 pages + Bootstrap 5) and place files in appropriate folders for a Maven nature spring boot project (like "templates" for html, etc).
On both pages i want to have the same navbar with logo, and navigation between pages (that will be explained further: kanban-board page, statistics page and "Add new" button for modal window)

## 1. Main page: Kanban-board
has colums of status of the job application(statuses: : Wishlist, Applied, Screening, Interview, Offer, Rejected (each of this columns has header with its relative name and number of cards contained in this column)).  

Cards of application should have a possibility to change its status through dropdown present on the card.  

Each card should have:
- name of the company(large font)
- job title
- date of application
- salary range(if indicated)
- priority badge(dream - green, good - blue, backup - gray)
- buttons: edit, delete, view details

## "Add new" button
It should use modal window for the form of adding/editing of a job application.
This form should have fields for: company name, job title, URL(for the link on job posting), salary min, salary max, priority(dropdown: dream, good, backup), status (dropdown corresponding to names of columns), contact person(for name and surname), contact email, notes (textarea).
Add Validation: each application card should have at least Company name and job title
and at the end this form should have buttons "Save" and "Cancel"

## 2. Page of statistics(you can use Chart.js if needed)
this page shows:
- total number of applicaitons
- breakdown by status(progress bar and a table with numbers of application per status underneath),
- number of applications in last month/week.

---
## final prompt for more precise result
 @src/main/resources/templates/statistics.html  has the same code 2 times - leave just one

make so that Chart.js doesn't try to fill all the space - restrict its vertical size and wrap the content in a container

add proper gitignore for spring boot java projects and IDEs like eclipse, vs code and IntellijIdea

# Tech stack
- Language Java
- Framework	Spring Boot
- Template Engine	**Thymeleaf**
- Frontend Framework **Bootstrap 5**
- Styling	**CSS3 + Bootstrap**
- Charting Library	**Chart.js**
- Build Tool **Maven**
- Server Embedded **Tomcat**
- Client Scripting **JavaScript** (ES6+)
