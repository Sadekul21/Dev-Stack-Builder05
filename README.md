# 🚀 Dev Stack Builder

A simple and interactive React application for exploring, selecting, and managing developer technologies in a clean and user-friendly interface.

---

## 🌐 Live Demo

🔗 **Live Website:** https://devstack-builder-website-05.netlify.app/

🔗 **GitHub Repository:** https://github.com/Sadekul21/Dev-Stack-Builder05

---

## 📸 Project Preview

![Dev Stack Builder Preview](<img width="945" height="435" alt="preview" src="https://github.com/user-attachments/assets/d2f1b3c5-215c-40de-995d-d93954160b4d" />
)

---

## 📖 About the Project

**Dev Stack Builder** is a React-based web application where users can explore different development technologies and build their own personalized tech stack.

I built this project to practice React and TypeScript through a practical application. It helped me work with components, state, props, dynamic data, user interactions, and responsive UI while keeping the overall experience simple and easy to use.

---

## ✨ Features

* 🧩 **Explore Technologies** — Browse and explore different development tools and technologies.
* ➕ **Build Your Stack** — Add technologies to your personal development stack.
* 🗑️ **Manage Your Stack** — Remove technologies from your stack whenever needed.
* 🔔 **Instant Feedback** — Get immediate feedback through toast notifications.
* ⚡ **Dynamic Data** — Technology information is loaded dynamically from a local JSON file.
* 📱 **Responsive Design** — Works across different screen sizes.
* 🎯 **Interactive Interface** — Provides a simple and intuitive way to manage your selected technologies.

---

## 🛠️ Tech Stack

| Technology        | Purpose                       |
| ----------------- | ----------------------------- |
| ⚛️ React          | Building the user interface   |
| 🔷 TypeScript     | Type-safe development         |
| ⚡ Vite            | Development and build tool    |
| 🎨 Tailwind CSS   | Styling and responsive design |
| 🌼 DaisyUI        | Reusable UI components        |
| 🔔 React Toastify | Toast notifications           |
| 📄 JSON           | Storing technology data       |

---

## 📦 Dependencies

The main packages used in this project are:

* `react`
* `react-dom`
* `react-toastify`
* `tailwindcss`
* `daisyui`

Other development dependencies and project configuration are available in the `package.json` file.

---

## 📁 Project Structure

```text
Dev-Stack-Builder05/
│
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── technologies.json
│
├── src/
│   ├── assets/
│   │   ├── banner-stack.png
│   │   ├── hero.png
│   │   ├── logo-text.png
│   │   └── preview.png
│   │
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── TechCard.tsx
│   │   └── YourStack.tsx
│   │
│   ├── types/
│   │   └── tech.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── package.json
├── README.md
└── vite.config.ts
```

---

## 🚀 Getting Started

Follow the steps below to run **Dev Stack Builder** on your local machine.

### Prerequisites

Before getting started, make sure you have the following installed:

* [Node.js](https://nodejs.org/) — Version 18 or higher
* [Git](https://git-scm.com/)

### 📥 Installation

#### 1. Clone the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/Sadekul21/Dev-Stack-Builder05.git
```

#### 2. Navigate to the Project Directory

Move into the project folder:

```bash
cd Dev-Stack-Builder05
```

#### 3. Install Dependencies

Install all required packages:

```bash
npm install
```

#### 4. Start the Development Server

Start the Vite development server:

```bash
npm run dev
```

#### 5. Open the Project in Your Browser

After the server starts, Vite will display a local URL in the terminal.

Usually, it will be:

```text
http://localhost:5173
```

Open this URL in your browser to view the application.

---

## 💡 React Concepts & Interview Questions

This project helped me practice several important React concepts. Here are some common questions related to the concepts used while building it.

### 1. What is JSX, and why is it used in React?

**Answer:**

JSX stands for **JavaScript XML**. It allows us to write HTML-like syntax directly inside JavaScript or TypeScript code.

I use JSX because it makes React components easier to read and understand. Instead of creating UI elements using methods like `React.createElement()`, I can write the structure in a way that looks similar to HTML.

For example:

```tsx
const heading = <h1>Dev Stack Builder</h1>;
```

JSX is then transformed into JavaScript that React can work with.

---

### 2. What is the difference between props and state?

**Answer:**

Both props and state are used to work with data in React, but they have different purposes.

**Props** are values passed from a parent component to a child component. They are read-only from the child's side.

**State** is data that a component manages itself. When the state changes, React updates the UI based on the new state.

For example, in this project, the selected technologies are stored in state, while functions or data can be passed to components such as `TechCard` through props.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:**

`useState` is a React Hook that lets a functional component store and update data that can change over time.

In this project, I used state to keep track of the technologies selected by the user.

For example:

```tsx
const [myStack, setMyStack] = useState([]);
```

When a user adds or removes a technology, I update the state using `setMyStack`. React then re-renders the relevant part of the UI.

---

### 4. What does the `useEffect` hook do, and why did you use it to load the JSON data?

**Answer:**

`useEffect` is a React Hook used for handling side effects in a component.

In this project, I used it to load the technology data from the `technologies.json` file when the component is first rendered.

Inside the effect, I used `fetch()` to get the JSON data and then stored the result in state.

For example:

```tsx
useEffect(() => {
  fetch("/technologies.json")
    .then((response) => response.json())
    .then((data) => setTechnologies(data));
}, []);
```

The empty dependency array means the effect runs after the initial render rather than running every time the component updates.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:**

When React renders a list using `.map()`, each item should have a unique `key`.

The key helps React identify which item has changed, been added, or been removed when the list updates.

For example:

```tsx
technologies.map((technology) => (
  <TechCard
    key={technology.id}
    technology={technology}
  />
));
```

Using a stable and unique key helps React update the list efficiently and prevents unnecessary rendering issues.

---

### 6. What is conditional rendering? Show one place you used it.

**Answer:**

Conditional rendering means showing different parts of the UI depending on a particular condition.

In this project, I used conditional rendering in `YourStack.tsx`.

For example, when the user's stack is empty, I show an **"Empty Stack"** message. Once the user adds technologies, the selected technologies are displayed instead.

A simple example looks like this:

```tsx
{myStack.length === 0 ? (
  <p>Empty Stack</p>
) : (
  <StackList />
)}
```

This allows the interface to respond naturally to the user's actions.

---

### 7. How do you pass data from a parent component to a child component, and how can a child send data back to the parent?

**Answer:**

In React, data normally flows from **parent to child** through props.

For example, the parent can pass a technology and a function to a child component:

```tsx
<TechCard
  technology={technology}
  onAdd={handleAdd}
/>
```

The child can then use those props when the user interacts with the UI.

For communication from **child to parent**, the parent can pass a callback function as a prop. When something happens in the child—for example, the user clicks an "Add to Stack" button—the child calls that function.

This keeps the data flow predictable while allowing child components to communicate user actions back to their parent.

---

## 🎯 What I Practiced

While building this project, I practiced and improved my understanding of:

* React components
* Props and state
* `useState` and `useEffect`
* Component communication
* Event handling
* Conditional rendering
* Rendering lists with `.map()`
* Unique `key` props
* TypeScript types and interfaces
* Fetching local JSON data
* Array methods
* Toast notifications
* Responsive UI development
* Tailwind CSS and DaisyUI
* Vite
* Git and GitHub workflow

---

## 🤝 Feedback

This project is part of my learning journey in frontend and full-stack web development.

I'm always open to constructive feedback and suggestions that can help improve the project.

---

## 👨‍💻 Author

**Md Sadekul Islam**

Computer Science Student | Full-Stack Web Development Learner

Currently focused on building practical projects and developing my skills in **JavaScript, TypeScript, React, Next.js, and Node.js**.

---

⭐ If you found this project interesting, feel free to explore the repository and check out the live demo.


