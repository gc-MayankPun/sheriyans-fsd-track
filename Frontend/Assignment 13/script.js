let users = [
  {
    name: "Mayank Pun",
    bio: "Will happily get kidnapped by anyone offering noodles.",
    pic: "https://imgs.search.brave.com/EEtcjCxjZVHhOtIYoTZ9liYXRqeIBx2INraSteeXVdo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NydXNoLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvZnVubnkt/cGZwLWJhY2tncm91/bmRzLmpwZw",
  },
  {
    name: "Riya Thapa",
    bio: "Sleeps like it’s her part-time job.",
    pic: "https://imgs.search.brave.com/BOpexC2oU3prSHdhM761QvGx9IkKDaeSPO1WJMDDGvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzlmL2Nk/LzllLzlmY2Q5ZTNj/MDM5MzVkOTdlOGMx/NDBhOGNiMjVhMDVl/LmpwZw",
  },
  {
    name: "Karan Joshi",
    bio: "Code. Sleep. Overthink. Repeat.",
    pic: "https://imgs.search.brave.com/j6iqfogYA6mIKJilO_JLNHmb4yPxNeI6_rYIEzEHjdk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/c2hvdy1tZS15b3Vy/LXBmcC10aGF0LXlv/dXItY3VycmVudGx5/LXVzaW5nLWFuZC1p/bGwtcmF0ZS1pdC12/MC1mbXBwbHdlbGxi/OWIxLmpwZWc_d2lk/dGg9NzMyJmF1dG89/d2VicCZzPTJlMjY2/NWQxOWI2N2ZkNzYw/NWU4ZDc2ODI5YmVk/NDI3YTNmMDJiNGQ",
  },
  {
    name: "Sana Lama",
    bio: "Currently buffering… please wait.",
    pic: "https://imgs.search.brave.com/-sZC52X_ojKO9-bv_gt869W_dTHcwQL5fp5M1Y1LbyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLXU1/enRkbnJrODA2NXBh/dmguanBn",
  },
  {
    name: "Nisha Rai",
    bio: "Thrives on chaos and caffeine.",
    pic: "https://imgs.search.brave.com/af5yg_snwKnh-bK58mVvcczM3QC1zK58fP64FmEHcoM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGZwZ2Vla3MuY29t/L3N0YXRpYy9pbWFn/ZXMvZnVubnktcGZw/L3dlYnAvZnVubnkt/cGZwLTkud2VicA",
  },
  {
    name: "Aarav Khadka",
    bio: "Living life one bug at a time.",
    pic: "https://imgs.search.brave.com/qGlSU6IYzpK1sxhD3Q_VefP8tqI69JnT9PIqAhleMQQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/c2hvdy1tZS15b3Vy/LXBmcC10aGF0LXlv/dXItY3VycmVudGx5/LXVzaW5nLWFuZC1p/bGwtcmF0ZS1pdC12/MC0yd25maGo4eDhi/OWIxLmpwZWc_d2lk/dGg9MjI2JmF1dG89/d2VicCZzPWFmYzcz/NzYzMDE0NjEyZTE0/Njc5ZTBiOTc0NzU1/MWIzNjQ5NDJiZTA",
  },
  {
    name: "Dev Koirala",
    bio: "Keyboard warrior by night, bug creator by day.",
    pic: "https://imgs.search.brave.com/ANseGqsn_SUJt32gcp6uAd5HG8hkIaz-fT1DGQXUld8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/c2hvdy1tZS15b3Vy/LXBmcC10aGF0LXlv/dXItY3VycmVudGx5/LXVzaW5nLWFuZC1p/bGwtcmF0ZS1pdC12/MC1uN3hrYjVnMXdh/OWIxLmpwZWc_d2lk/dGg9Nzk4JmF1dG89/d2VicCZzPTk2ZGEy/Y2FkZDhlYWUzOTg2/MTQyNWEwOWU1ZTU1/ZDlmZGM1OGMzZTQ",
  },
  {
    name: "Anjali Shrestha",
    bio: "I code better with lo-fi and snacks.",
    pic: "https://imgs.search.brave.com/myjJyoMWCgEM6V_ObGxOUl12NWyLkdwGthDzV38JRpQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLXQw/dmxxdjVnbHU3eG80/bWIuanBn",
  },
  {
    name: "Sujal Bhattarai",
    bio: "99% of my problems start with low WiFi.",
    pic: "https://imgs.search.brave.com/TdzJQsLW6SnvCmWKj7ATK0o5NLbriMyXvhh0G-FoltI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFlL2Vh/L2I2LzFlZWFiNmFk/YzE5ZDU1NDcxYzkw/NDhlNWFjMzU2MjE2/LmpwZw",
  },
  {
    name: "Prisha Gurung",
    bio: "Introverted but will dance if bribed with coffee.",
    pic: "https://imgs.search.brave.com/C6QXYu7KhkCEUnS3kf7pgLwQEiGoKd2xgElPcINGh98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E3Lzgy/L2Q2L2E3ODJkNjcx/NGZlMDk5YmU0NzQ5/NzI4OGMwMjQ1OTA5/LmpwZw",
  },
  {
    name: "Tashi Sherpa",
    bio: "Still waiting for my code to compile since 2019.",
    pic: "https://imgs.search.brave.com/JN-JFEgfIhy2Jl9pJVm60aiJbml5xtntCii9jd5YzhM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/MTQ0NDI0Mi92ZWN0/b3IvYW5pbWUtc3R5/bGUtY3V0ZS1naXJs/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz13RmtPeWpLazRV/R0dHYkhSNzNCWkFY/eFBreVQ0MnFzcmVY/RWVQV3NsVEFjPQ",
  },
  {
    name: "Sneha Guragain",
    bio: "Professional procrastinator with a PhD in naps.",
    pic: "https://imgs.search.brave.com/7ex7mfGqv7R-wOnRxus_du6AeD4-xaOc-bn3IF5BWvA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hbmltZS1naXJs/LXdpdGgtYW5nZWwt/d2luZ3MtY3VwLWNv/ZmZlZS1nZW5lcmF0/aXZlLWFpXzk1ODEy/NC0zMDU3MS5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA",
  },
  {
    name: "Rohan Bhujel",
    bio: "Trust me, it worked on my machine.",
    pic: "https://imgs.search.brave.com/BVedrAQ8Es_Rv5Ho_pNWIuz4VoRZVVkptikeG4E5TyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdhL2Ew/LzQ2LzdhYTA0NjI4/NDdiMDViZGRmOGQ5/Y2MwM2Q0ZmVkYzFk/LmpwZw",
  },
  {
    name: "Meera Rai",
    bio: "Running on coffee and chaotic energy.",
    pic: "https://imgs.search.brave.com/03V3itrMPciNxyGferAax9gjxdJyfHMsL9lDBv7HVio/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hbmltZS1naXJs/LXdpdGgtaGVhZHBo/b25lcy1ncmVlbi1i/YWNrZ3JvdW5kXzkx/NjE5MS0yNDM2Nzku/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MCZxPTgw",
  },
  {
    name: "Arjun Tamang",
    bio: "Still debugging life one console.log at a time.",
    pic: "https://imgs.search.brave.com/EOjgUgQFkFEEBQ3QZaQep32Q-ZjODDITvL6WV4TulWI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzQxNi80MTYva3Zs/YWFhODAvcG9zdGVy/L2Ivei9iL21lZGl1/bS1hbmltZS1ib3kt/YWVzdGhldGljLWFl/c3RoZXRpYy1hbmlt/ZS1hZXN0aGV0aWMt/YW5pbWUtYm95LW9y/aWdpbmFsLWltYWc4/Z2F5cXYyZGZ2OWcu/anBlZz9xPTcwJmNy/b3A9ZmFsc2U",
  },
  {
    name: "Nima Gurung",
    bio: "Too glam to give a RAM.",
    pic: "https://imgs.search.brave.com/iMpP8cVB209Y9LKym6FDCly-0TP79FDYiNEgg-HNN_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3N0ZXItYW5p/bWUtY2FsbGVkLWdp/cmwtd2l0aC1yZWQt/aGVhZHBob25lc185/MTYxOTEtMjQzOTk1/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA",
  },
  {
    name: "Kritika Limbu",
    bio: "Dreams in JavaScript, nightmares in CSS.",
    pic: "https://imgs.search.brave.com/KCFf83TYtiVMaz5KzJOGmVH3LNaJChqMvWd8zS5DH-A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY3V0/ZS1hZXN0aGV0aWMt/YW5pbWUtZ2lybC1w/ZnAtYnR0b2YyZW1u/ZW5rZXZtci5qcGc",
  },
  {
    name: "Ritesh Pradhan",
    bio: "Alt + Tab is my favorite workout.",
    pic: "https://imgs.search.brave.com/YUYDoXn-YYONZdxIblrSCzIn1YLeZ9eFa6Jpi6ybLUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Z0Y2RuLm5l/dC9pbWFnZXMvdF9h/cHAtY292ZXItcyxm/X2F1dG8vcC80YjRl/M2U4Ny0xYzRjLTQx/MTItYjYwNC0wOGU4/YzRlNjcwOGUvMjQ2/NDEzMjk2Ni9hbmlt/ZS1ib3ktcHJvZmls/ZS1waWN0dXJlLXNj/cmVlbnNob3Q",
  },
  {
    name: "Shristi Malla",
    bio: "Functioning on sarcasm and late-night coding sessions.",
    pic: "https://imgs.search.brave.com/RyMNubLaxNOcIiz_hIH2qiUebZO9xtSnSTPeLhR5L7w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU0L2Rj/L2Y0LzU0ZGNmNGRm/NjI1NjQxZTNjNWFj/NGQ3YWQ2NjViNDc0/LmpwZw",
  },
  {
    name: "Bibek Rana",
    bio: "Currently in a serious relationship with VS Code.",
    pic: "https://imgs.search.brave.com/Dn5Rbn5MQ9zP_C7yW6ruk9-Yg2KxYprGXjwNrfacXEk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYWVz/dGhldGljLWFuaW1l/LWJveS1yZWQtcm9z/ZXMtZmJsbG9ia2xp/dmQ3cmd0My5qcGc",
  },
];

let container = document.querySelector(".container");

const showUsers = (users) => {
  if (users.length === 0) {
    let p = document.createElement("p");
    p.textContent = "No users found 😖😖";
    container.append(p);
  } else {
    users.forEach((user) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.style.backgroundImage = `url(${user.pic})`;

      card.innerHTML = `
      <div class="text-box">
      <p>${user.name}</p>
      <p>${user.bio}</p>
      </div>
      `;
      container.append(card);
    });
  }
};

showUsers(users);

let searchInp = document.querySelector("#search");

searchInp.addEventListener("input", (dets) => {
  let input = dets.target.value;

  let filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().startsWith(input);
  });

  container.innerHTML = "";
  showUsers(filteredUsers);
});
