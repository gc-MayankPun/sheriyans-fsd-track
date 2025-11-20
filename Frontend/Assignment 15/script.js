const users = [
  {
    fullname: "Aanya Gurung",
    image: "https://images.unsplash.com/photo-1763357021261-da70533bc68b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Frontend Developer",
    description: "Aanya builds clean and responsive user interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    fullname: "Prabin Thapa",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    profession: "Product Manager",
    description: "Prabin leads product vision and workflow execution.",
    tags: ["Roadmaps", "Agile", "Research", "Coordination"],
  },
  {
    fullname: "Nisha KC",
    image: "https://images.unsplash.com/photo-1720511756385-b3c0cc721f77?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Graphic Designer",
    description: "Nisha creates visual concepts for brands.",
    tags: ["Illustrator", "Photoshop", "Branding", "Layout"],
  },
  {
    fullname: "Ritik Rana",
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Backend Developer",
    description: "Ritik builds APIs and manages server-side logic.",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis"],
  },
  {
    fullname: "Sarina Moktan",
    image: "https://images.unsplash.com/photo-1592748249762-d77a7ca22267?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Content Writer",
    description: "Sarina writes engaging and SEO-friendly content.",
    tags: ["Writing", "SEO", "Editing", "Blogging"],
  },
  {
    fullname: "Dev Sharma",
    image: "https://plus.unsplash.com/premium_photo-1674640775444-0cefc87f40f0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "AI/ML Engineer",
    description: "Dev builds machine learning models and tools.",
    tags: ["Python", "TensorFlow", "Data Science", "ML Ops"],
  }
];


let sum = "";
users.forEach((user) => {
  sum += `
    <div class="card">
        <img src="${user.image}" alt="${user.fullname} image" />
        <h3>${user.fullname}</h3>
        <h4>${user.profession}</h4>
        <p>${user.description}</p>
    </div>
    `;

  document.querySelector("main").innerHTML = sum;
});
