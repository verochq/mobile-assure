# Welcome to _mobile-assure_ 📱 This is a mobile project created for **Digital Academy** training program provide by <p align="center"> <a> <img src="https://tse4.mm.bing.net/th/id/OIP.rlM39EHU1JE8Q-UMBkpGiAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" /> </a> </p> ### 🎬 About the Project **Movies App** is a **React Native** mobile app built to offer a **simple and elegant way to explore movies**. It provides users with **reliable information** — including cast, genres, ratings, and release details — all powered by [**The Movie Database (TMDb)**](https://www.themoviedb.org/). Designed with a focus on **clarity, performance, and modern aesthetics**, the app delivers a smooth experience in both **Light and Dark themes**. 🎨 **Figma Design:** [Movies App – Light & Dark Theme](https://www.figma.com/design/ku48eB0asVO5bmJFPDEGOD/Movies-mobile-app-home---Light---Dark--Community-?node-id=203-1309&p=f&t=uSFdgiceMk50ZV8B-0) ## Index 1. [Getting Started](#getting-started) - [Prerequisites](#prerequisites) - [Installation](#installation) - [Environment Variables](#environment-variables) - [Running the App](#running-the-app) 2. [Folder Structure](#folder-structure) 3. [Scripts & Commands](#scripts--commands) 4. [App Preview](#app-preview) - [Screenshots](#screenshots) --- ## 🚀 Getting Started Follow these steps to set up and run the project locally. ### 🧩 Prerequisites Make sure you have the following installed on your system: - [Node.js](https://nodejs.org/) (v18 or higher recommended) - [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) - [Expo CLI](https://docs.expo.dev/get-started/installation/) > For a complete setup guide, refer to the official [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment). and [Expo Set Up Enviroment](https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build&platform=android&device=simulated) ### 📦 Installation Clone the repository and install dependencies:
bash
git clone <your-repo-url>
cd <your-project-folder>
npm install
### 🔑 Environment Variables Create a .env file in the root of your project and add the following environment variables:
bash
TMDB_ACCESS_TOKEN=
TMDB_API_KEY=
TMDB_BASE_URL=https://api.themoviedb.org/3
TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
> ⚠️ Make sure your TMDb API credentials are valid. You can get them from [The Movie Database API](https://www.themoviedb.org/settings/api). ### ▶️ Running the App To start the app in development mode, run:
bash
npx expo start
### 🏗 Build & Deployment To create production builds of your app:
bash
# Build Android APK
expo build:android -t apk

# Build Android AAB
expo build:android -t app-bundle
--- ## 📁 Folder Structure A brief overview of the main folders:
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
Index.tsx       → Main application component
--- ## 🛠 Scripts & Commands Some useful scripts included in the project:
bash
npm start          # Start the Expo development server
npm run android    # Open app in Android emulator
npm run ios        # Open app in iOS simulator (macOS only)
npm run web        # Run the app in a web browser
--- ## 📱 App Preview ### Screenshots **Home Screen** ![Home Screen](https://i.imgur.com/VuwzmnM.png) **Search Screen** ![Search Screen](https://i.imgur.com/Joh3Q0P.png) **Wishlist Screen** ![Wishlist Screen](https://i.imgur.com/DAapV4o.png) **Profile Screen** ![Profile Screen](https://i.imgur.com/Dmp8qGf.png) **Detail movie** ![Modal](https://i.imgur.com/VNzXeLX.png)
