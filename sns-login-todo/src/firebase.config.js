// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

// TODO 인증에 필요한 모듈을 import 하세요.

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA71kG6jvlT3xwI3tC1x5cFwERGpm2k84w",
  authDomain: "programmers-7e0cb.firebaseapp.com",
  projectId: "programmers-7e0cb",
  storageBucket: "programmers-7e0cb.appspot.com",
  messagingSenderId: "1049454172370",
  appId: "1:1049454172370:web:03a45407b874c01cd0350b",
  measurementId: "G-8BVW4JDQY2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// CRUD

// Create
export const addPost = async (post) =>
  await addDoc(collection(db, "posts"), post);

// Read
export const postsDocSnap = await getDocs(collection(db, "posts"));

// Update
export const updatePost = async (id, content) => {
  await updateDoc(doc(db, "posts", id), {
    content: content,
  });
};

// Delete
export const deletePost = async (id) => await deleteDoc(doc(db, "posts", id));

// TODO 인증에 필요한 코드를 작성하세요.