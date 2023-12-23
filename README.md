# Todo App
This is a simple Offline Todo application built using React and Redux for managing tasks.

## Hosted Link on Netlify
 - Click the Link to Preview <br/>
<br/>

## Features
- **Add Todos:** Add new tasks to the list.
- **Todo Lists/Cards:** Each todo represented as a list and card also with motion animation, allowing deletion and completion toggling.
- **Delete Todos:** Remove tasks from the list.
- **Complete Todos:** Mark tasks as completed.
- **Sorting:** Active todos appear on top, sorted by creation time; completed todos appear below, sorted by completion time.
- **Local Storage:** Todos are saved to local storage for persistent data.
- **Reset Button:** To clear all todos from the list and local storage.
- **Click Me Button:** - Drag Motion feature to view the Todo's in List or Card View.
- **Scrollable List:** List container with a vertical scrollbar for navigation through todos.

## Libraries/Frameworks Used
- **React:** Used for building the user interface and managing components.
- **Redux:** State management for handling Todo actions across the app.
- **React-Redux:** Integration of Redux with React components.
- **@reduxjs/toolkit:** Utilized for Redux slice creation and simplifying Redux setup.
- **Framer Motion:** Used for animation effects in the UI.
- **Tailwind CSS:** Styling framework for responsive and modern UI components.
  **react-icons**: Collection of icons for React applications.

## Getting Started

### Installation

1. Clone the repository.
2. Install dependencies using `npm install`.

### Starting the Server

Run the server using `npm run dev`.

Your web app should now be running locally. Open your web browser and access it at http://localhost:5173 or the port specified in your app.

### Assumptions

- Todos are stored locally and are accessible only within the same browser and device.
- The app is assumed to handle a moderate number of todos within reasonable browser limits.
- Todos are managed only within the scope of the current session and aren't synced across multiple devices or users.
- Assumption about user familiarity with basic todo app functionalities (adding, deleting, marking as complete, etc.).

### Future Improvements
Highlight potential enhancements or future functionalities that could be added to the project. For instance:

**User Authentication:** Implement user accounts to save personalized todo lists.
**Categories/Tags:** Allow users to categorize todos with tags or categories.
**Drag-and-Drop Functionality:** Enable reordering of todos through drag-and-drop.
**Responsive Design:** Enhance the UI for better mobile responsiveness.


### Folder Structure
📦Todo-docs<br>
 ┣ 📂public<br>
 ┣ 📂src<br>
 ┃ ┣ 📂assets<br>
 ┃ ┃ ┣ 📂js<br>
 ┃ ┃ ┃ ┗ 📜dateFinder.js<br>
 ┃ ┣ 📂components<br>
 ┃ ┃ ┣ 📜Background.jsx<br>
 ┃ ┃ ┣ 📜Foreground.jsx<br>
 ┃ ┃ ┣ 📜InputBar.jsx<br>
 ┃ ┃ ┣ 📜NavBar.jsx<br>
 ┃ ┃ ┣ 📜TodoApp.jsx<br>
 ┃ ┃ ┣ 📜TodoCard.jsx<br>
 ┃ ┃ ┣ 📜TodoItem.jsx<br>
 ┃ ┃ ┗ 📜TodoList.jsx<br>
 ┃ ┣ 📂customHooks<br>
 ┃ ┃ ┗ 📜useLocalStorage.js<br>
 ┃ ┣ 📂redux<br>
 ┃ ┃ ┗ 📜todoSlice.js<br>
 ┃ ┣ 📜App.jsx<br>
 ┃ ┣ 📜index.css<br>
 ┃ ┣ 📜main.jsx<br>
 ┃ ┗ 📜store.js<br>
 ┣ 📜.eslintrc.cjs<br>
 ┣ 📜.gitignore<br>
 ┣ 📜index.html<br>
 ┣ 📜package-lock.json<br>
 ┣ 📜package.json<br>
 ┣ 📜postcss.config.js<br>
 ┣ 📜README.md<br>
 ┣ 📜tailwind.config.js<br>
 ┗ 📜vite.config.js<br>