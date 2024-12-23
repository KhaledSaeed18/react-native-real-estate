# 🏠 React Native Real Estate App

A modern real estate mobile application built with React Native, Expo, and Appwrite backend.

## 🚀 Technology Stack

### Core Technologies

- React Native (v0.76.5)
- Expo (v52.0.20)
- TypeScript
- Expo Router v4 (for file-based routing)

### Styling

- NativeWind & TailwindCSS (for styling)

### Backend

- Appwrite (Authentication & Database)

## ⚡️ Features

- 🏘️ Modern UI with TailwindCSS
- 📱 File-based routing with Expo Router
- 🔐 Secure authentication with Appwrite
- 📱 Cross-platform support (iOS & Android)
- 🎨 Responsive design with NativeWind

## 🛠️ Setup & Installation

1. Clone the repository

   ```bash
   git clone https://github.com/KhaledSaeed18/react-native-real-estate.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Configure Appwrite
   Create a `.env.local` file:

   ``` .env
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=<your_appwrite_projectId>
   EXPO_PUBLIC_APPWRITE_ENDPOINT=<your_appwrite_endpoint>
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=<your_appwrite_databaseId>
   EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=<your_appwrite_agentsCollectionId>
   EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=<your_appwrite_galleriesCollectionId>
   EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=<your_appwrite_reviewsCollectionId>
   EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=<your_appwrite_propertiesCollectionId>
   ```

4. Start development server

   ```bash
   npx expo start
   ```
