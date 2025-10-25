This is a mobile project created for the **Digital Academy** training program.

<p align="center">
  <img src="https://tse4.mm.bing.net/th/id/OIP.rlM39EHU1JE8Q-UMBkpGiAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" width="420"/>
</p>

---

### 🎬 About the Project

**Movies App** is a **React Native** mobile app that offers a **simple and elegant way to explore movies**.  
It provides users with **reliable information** — including cast, genres, ratings, and release details — all powered by [**The Movie Database (TMDb)**](https://www.themoviedb.org/).  

Designed with a focus on **clarity, performance, and modern aesthetics**, the app delivers a smooth experience in both **Light and Dark themes**.  

🎨 **Figma Design:**  
[Movies App – Light & Dark Theme](https://www.figma.com/design/ku48eB0asVO5bmJFPDEGOD/Movies-mobile-app-home---Light---Dark--Community-?node-id=203-1309&p=f&t=uSFdgiceMk50ZV8B)

---

## 📑 Index
1. [Getting Started](#-getting-started)
   - [Prerequisites](#-prerequisites)
   - [Installation](#-installation)
   - [Environment Variables](#-environment-variables)
   - [Running the App](#-running-the-app)
2. [Folder Structure](#folder-structure)
3. [Scripts & Commands](#scripts--commands)
4. [App Preview](#app-preview)
   - [Screenshots](#screenshots)

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 🧩 Prerequisites
Make sure you have the following installed on your Windows system:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Java JDK 17+](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- [Android Studio](https://developer.android.com/studio) (with Android SDK and AVD Manager configured)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

> This setup allows you to run the app on a **simulated Android device** or on a **real device via USB debugging**.

### 📦 Installation
Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd <your-project-folder>
npm install
```

### 🔑 Environment Variables
Create a `.env` file in the root of your project and add:

```bash
TMDB_ACCESS_TOKEN=
TMDB_API_KEY=
TMDB_BASE_URL=https://api.themoviedb.org/3
TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
```

> ⚠️ Make sure your TMDb API credentials are valid. You can get them from [The Movie Database API](https://www.themoviedb.org/settings/api).

### ▶️ Running the App
Start the Metro bundler:

```bash
npx react-native start
```

In another terminal, run the app on an Android emulator or connected device:

```bash
npx react-native run-android
```

> 💡 If the emulator doesn’t start automatically, open **Android Studio → Tools → AVD Manager** and launch it manually.

---

## 🏗 Build & Deployment

To generate a production build (APK):

```bash
cd android
./gradlew assembleRelease
```

Your APK will be located in:

```
android/app/build/outputs/apk/release/app-release.apk
```

---

## 📁 Folder Structure

```
src/
  ├─ assets     → Images
  ├─ components → Reusable UI components
  ├─ constants  → Colors and global constants
  ├─ contexts   → React context providers
  ├─ hooks      → Custom hooks
  ├─ navigation → React Navigation setup
  ├─ screens    → App screens
  └─ types      → TypeScript interfaces and type definitions
.env            → Environment variables file
App.tsx         → Main component
index.js        → Entry point for React Native app
```

---

## 🛠 Scripts & Commands

```bash
npm start              # Start Metro bundler
npm run android        # Build and run app on Android emulator or device
npm run lint           # Run ESLint for code style checking
npm run clean          # Clear Metro and Gradle cache
```

---

## 📱 App Preview

### Screenshots

<p align="center">
  <img src="https://i.imgur.com/7BEZmkv.png" width="180"/>
  <img src="https://i.imgur.com/yugF6J2.png" width="180"/>
  <img src="https://i.imgur.com/J0Hq71I.png" width="180"/>
  <img src="https://i.imgur.com/4BZNiO7.png" width="180"/>
  <img src="https://i.imgur.com/MvBmWQw.png" width="180"/>
</p>
