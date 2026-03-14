# AIMA Exercises Website (v8) — Firebase Integration

A static AIMA exercise table of contents with Firebase Realtime Database integration for user sign-ups, contact forms, and form data persistence.

## What It Does

- Displays a full table of contents for AIMA textbook exercises (Chapters 1–27)
- Collects beta sign-up emails via Firebase Realtime Database
- Provides a contact form that stores messages in Firebase
- Demonstrates Firebase integration with a static GitHub Pages site

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| 🌐 HTML/CSS | Static page structure |
| 🅱️ [Bootstrap](https://getbootstrap.com/) | Responsive layout and forms |
| 🔥 [Firebase](https://firebase.google.com/) | Realtime Database for sign-ups and messages |
| 📝 fbtoform.js | Custom Firebase-to-form data binding utility |

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/stabgan/aima-website-8.git
   cd aima-website-8
   ```

2. Open `index.html` in a browser.

3. To use your own Firebase project, update the config object in `index.html` and `fbtoform.js` with your Firebase credentials.

## Project Structure

```
├── index.html       # Main page with TOC, sign-up form, and contact form
├── fbtoform.js      # Firebase-to-form data binding utility
└── css/             # Bootstrap CSS (referenced but not included — see Known Issues)
```

## ⚠️ Known Issues

- The `css/` directory containing Bootstrap CSS files (`bootstrap.css`, `bootstrap-grid.css`, `bootstrap-reboot.css`, `cards.css`) is referenced in `index.html` but not included in the repository. The page relies on these local files for styling.
- Firebase SDK v4.12.0 is outdated; the current Firebase Web SDK is v10+. A migration to the modular SDK (`firebase/app`, `firebase/database`) is recommended.
- Exercise chapter links (e.g., `intro_exercise_card.html`) reference local HTML files that are not included in this repository.
- Firebase API keys are exposed in client-side code. While this is standard for Firebase web apps, ensure Firebase Security Rules are properly configured to restrict unauthorized access.
