import { db, collection, addDoc } from "./firebase.config.js";

// Header hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Cloudinary setup
const CLOUD_NAME = "dzakombpw";
const UPLOAD_PRESET = "blog_upload";

// Add Blog Form
const form = document.getElementById("add-blog-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const content = document.getElementById("content").value.trim();
  const imageFile = document.getElementById("image").files[0];

  if (!title || !author || !content || !imageFile) {
    alert("All fields are required!");
    return;
  }

  // Upload image to Cloudinary
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", UPLOAD_PRESET);

  const cloudinaryURL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

  try {
    const res = await fetch(cloudinaryURL, { method: "POST", body: formData });
    const data = await res.json();
    const imageURL = data.secure_url;

    // Save blog to Firebase
    await addDoc(collection(db, "blogs"), {
      title,
      author,
      content,
      image: imageURL,
      date: new Date().toLocaleDateString()
    });

    alert("Blog added successfully!");
    form.reset();
  } catch (err) {
    console.error("Error uploading blog:", err);
    alert("Failed to add blog.");
  }
});
