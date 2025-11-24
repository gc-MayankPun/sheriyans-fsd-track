const reels = [
  {
    username: "aanya_g",
    likeCount: 2450,
    isLiked: false,
    commentCount: 128,
    caption: "Late night code + lo-fi hits different ✨",
    video: "./reels/1.mp4",
    userprofile: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    shareCount: 32,
    isFollowed: true,
  },
  {
    username: "prabin_th",
    likeCount: 3800,
    isLiked: true,
    commentCount: 210,
    caption: "Productivity tip: Break tasks, not habits.",
    video: "./reels/2.mp4",
    userprofile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    shareCount: 44,
    isFollowed: false,
  },
  {
    username: "nisha_kc",
    likeCount: 1520,
    isLiked: false,
    commentCount: 65,
    caption: "Color palettes that just *feel right* 🎨",
    video: "./reels/3.mp4",
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 12,
    isFollowed: true,
  },
  {
    username: "ritik_r",
    likeCount: 5000,
    isLiked: true,
    commentCount: 300,
    caption: "Building APIs like a beast 💻",
    video: "./reels/4.mp4",
    userprofile:
      "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 69,
    isFollowed: true,
  },
  {
    username: "sarina_m",
    likeCount: 980,
    isLiked: false,
    commentCount: 42,
    caption: "Writing today’s blog: caffeine mode on ☕",
    video: "./reels/5.mp4",
    userprofile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 8,
    isFollowed: false,
  },
  {
    username: "dev_sh",
    likeCount: 7600,
    isLiked: true,
    commentCount: 455,
    caption: "AI model accuracy finally hit 92%! 🔥",
    video: "./reels/6.mp4",
    userprofile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    shareCount: 120,
    isFollowed: true,
  },
  {
    username: "mira_art",
    likeCount: 1340,
    isLiked: false,
    commentCount: 88,
    caption: "Sketching something new today ✏️",
    video: "./reels/7.mp4",
    userprofile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    shareCount: 15,
    isFollowed: false,
  },
  {
    username: "rohan_cy",
    likeCount: 4250,
    isLiked: true,
    commentCount: 199,
    caption: "Cybersecurity tip: update your passwords!",
    video: "./reels/8.mp4",
    userprofile: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6",
    shareCount: 56,
    isFollowed: true,
  },
  {
    username: "sujal_dev",
    likeCount: 2100,
    isLiked: false,
    commentCount: 102,
    caption: "Dark mode or light mode? Which one you prefer?",
    video: "./reels/9.mp4",
    userprofile: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    shareCount: 18,
    isFollowed: false,
  },
  {
    username: "luna_writes",
    likeCount: 3050,
    isLiked: true,
    commentCount: 150,
    caption: "Ideas flow better at midnight 🌙",
    video: "./reels/10.mp4",
    userprofile:
      "https://images.unsplash.com/photo-1704775983177-8ae543524081?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shareCount: 27,
    isFollowed: true,
  },
];

reels.forEach((reel) => {
  createReel(reel);
});

function createReel(reel) {
  let reelDiv = document.createElement("div");
  reelDiv.classList.add("reel");
  reelDiv.innerHTML = `
        <video src="${reel.video}" loop muted></video>
        <div class="bottom">
            <div class="user">
            <img
                src="${reel.userprofile}"
                alt="${reel.username} pfp"
            />
            <h4>${reel.username}</h4>
            <button>${reel.isFollowed ? "Unfollow" : "Follow"}</button>
            </div>
            <h3>${reel.caption}</h3>
        </div>
        <div class="right">
        <div class="like">
            <h4 class="like-icon icon">${
              reel.isLiked
                ? `<i class="ri-heart-fill"></i>`
                : `<i class="ri-heart-3-line"></i>`
            }</h4>
            <h6>${reel.likeCount}</h6>
        </div>
        <div class="comment">
            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
            <h6>${reel.commentCount}</h6>
        </div>
        <div class="share">
            <h4 class="share-icon icon">
            <i class="ri-share-forward-fill"></i>
            </h4>
            <h6>${reel.shareCount}</h6>
        </div>
        <div class="menu">
            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
        </div>
    </div>
    `;

  document.querySelector(".all-reels").appendChild(reelDiv);
}
