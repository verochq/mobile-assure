# Welcome to _mobile-assure_ 📱  

This is a mobile project created for the **Digital Academy** training program provided by:

<p align="center">
  <img src="https://tse4.mm.bing.net/th/id/OIP.rlM39EHU1JE8Q-UMBkpGiAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" width="180" />
</p>  

---

## 🎬 About the Project  

**Movies App** is a **React Native** mobile application built to provide a simple, elegant, and efficient way to explore movies.  
It allows users to view cast, genres, ratings, and release information, powered by [**The Movie Database (TMDb)**](https://www.themoviedb.org/). The design focuses on clarity, performance, and modern aesthetics, supporting both Light and Dark modes.  

The video that can show the app with more detail: [Movies App Video](https://drive.google.com/file/d/1_Y7ULOhOcdYihcnisn6O9wQy2nWyp-ow/view?usp=drivesdk)

🎨 **Figma Design:**  
[Movies App – Light & Dark Theme](https://www.figma.com/design/ku48eB0asVO5bmJFPDEGOD/Movies-mobile-app-home---Light---Dark--Community-?node-id=203-1309&p=f&t=uSFdgiceMk50ZV8B-0)

---

## 🧭 Index  

1. [Getting Started](#-getting-started)  
   - [Prerequisites](#-prerequisites)  
   - [Installation](#-installation)  
   - [Environment Variables](#-environment-variables)  
   - [Running the App](#-running-the-app)  
2. [Folder Structure](#-folder-structure)  
3. [Scripts & Commands](#-scripts--commands)  
4. [App Preview](#-app-preview)  

---

## 🚀 Getting Started  

Follow these steps to set up and run the project locally.

### 🧩 Prerequisites  

Make sure you have the following installed:  
- [Node.js](https://nodejs.org/) (v18 or higher recommended)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  
- [Java JDK 11+](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)  
- [Android Studio](https://developer.android.com/studio) (with SDK and emulator configured)  
- (Optional) [Xcode](https://developer.apple.com/xcode/) for iOS builds (macOS only)  

> 💡 For detailed setup instructions, check:  
> [React Native CLI Environment Setup](https://reactnative.dev/docs/set-up-your-environment)

---

### 📦 Installation  

Clone the repository and install dependencies:  

```bash
git clone <your-repo-url>
cd <your-project-folder>
npm install
```

Then install native dependencies:  

```bash
npx pod-install
```

---

### 🔑 Environment Variables  

Create a `.env` file in your root directory and add:  

```bash
TMDB_ACCESS_TOKEN=
TMDB_API_KEY=
TMDB_BASE_URL=https://api.themoviedb.org/3
TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
```

> ⚠️ Obtain your TMDb API credentials from [The Movie Database API](https://www.themoviedb.org/settings/api).

---

### ▶️ Running the App  

To run on Android:  

```bash
npx react-native run-android
```

To run on iOS (macOS only):  

```bash
npx react-native run-ios
```

Start the Metro bundler manually (if not running automatically):  

```bash
npx react-native start
```

---

### 🏗 Build & Deployment  

To create a release build for Android:  

```bash
cd android
./gradlew assembleRelease
```

> The APK will be located in:  
> `android/app/build/outputs/apk/release/app-release.apk`

For iOS:  

```bash
cd ios
xcodebuild -workspace <YourApp>.xcworkspace -scheme <YourApp> -configuration Release
```

---

## 📁 Folder Structure  

```
src/
  ├─ assets/       → Images and icons
  ├─ components/   → Reusable UI components
  ├─ constants/    → Colors, fonts, and global constants
  ├─ contexts/     → React context providers
  ├─ hooks/        → Custom hooks
  ├─ navigation/   → React Navigation setup
  ├─ screens/      → App screens
  └─ types/        → TypeScript types

.env              → Environment variables
App.tsx           → Main component
Index.tsx         → Main app component
index.js          → App entry point
```

---

## 🛠 Scripts & Commands  

```bash
npm start             # Start Metro bundler
npm run android       # Run app on Android device/emulator
npm run ios           # Run app on iOS simulator (macOS only)
npm run lint          # Run ESLint
npm run clean         # Clean build cache (manual setup)
```

---

## 📱 App Preview  

### Screenshots  

<p align="center">
  <img src="https://i.imgur.com/VuwzmnM.png" width="120"/>
  <img src="https://i.imgur.com/Joh3Q0P.png" width="120"/>
  <img src="https://i.imgur.com/DAapV4o.png" width="120"/>
  <img src="https://i.imgur.com/Dmp8qGf.png" width="120"/>
  <img src="https://i.imgur.com/VNzXeLX.png" width="120"/>
</p>

