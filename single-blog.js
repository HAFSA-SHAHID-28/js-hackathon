// get blog id from URL
const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

// temporary static blogs data
const blogs = {
  1: {
    title: "Eye Shadow Guide",
    author: "Justin",
    date: "March 1, 2025",
    image: "./assets/eyeshadow.jpg",
    content: "This is full blog content about eye shadow..."
  },
  2: {
    title: "Lipstick Trends",
    author: "Justin",
    date: "March 2, 2025",
    image: "./assets/lipstick.jpg",
    content: "This is full blog content about lipstick..."
  }
};

// render blog
const blog = blogs[blogId];

if (blog) {
  document.getElementById("blog-title").innerText = blog.title;
  document.getElementById("blog-meta").innerText =
    `By ${blog.author} - ${blog.date}`;
  document.getElementById("blog-image").src = blog.image;
  document.getElementById("blog-content").innerText = blog.content;
}

const form = document.getElementById("comment-form");
const list = document.getElementById("comments-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = document.getElementById("comment-text").value;

  const div = document.createElement("div");
  div.innerText = text;

  list.appendChild(div);
  form.reset();
});
