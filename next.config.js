/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['i0.wp.com']
  },
  env:{
    FIREBASE_API_KEY:"AIzaSyCleMjKDxKIdG8ni0UB9qvp6EW3LXbUNEw",
    FIREBASE_AUTH_DOMAIN:"farmart-grocery-dee5f.firebaseapp.com",
    FIREBASE_PROJECT_ID:"farmart-grocery-dee5f",
    FIREBASE_STORAGE_BUCKET:"farmart-grocery-dee5f.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID:"699720804461",
    FIREBASE_APP_ID:"1:699720804461:web:f80e60c11a9c684a26b764",
  }
}

module.exports = nextConfig
