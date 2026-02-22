const reels = [
  {
    id: 1,
    username: "travelwithravi",
    userProfilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    caption: "Nature trip vibes 🌄",
    likeCount: 1243,
    commentCount: 87,
    shareCount: 32,
    isLiked: false,
    isFollowed: true,
  },
  {
    id: 2,
    username: "fitwithneha",
    userProfilePic: "https://randomuser.me/api/portraits/women/12.jpg",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    caption: "Workout motivation 💪",
    likeCount: 5321,
    commentCount: 211,
    shareCount: 98,
    isLiked: true,
    isFollowed: true,
  },
  {
    id: 3,
    username: "codewithaman",
    userProfilePic: "https://randomuser.me/api/portraits/men/13.jpg",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    caption: "Coding night 💻",
    likeCount: 884,
    commentCount: 45,
    shareCount: 12,
    isLiked: false,
    isFollowed: false,
  },
  {
    id: 4,
    username: "foodie_diaries",
    userProfilePic: "https://randomuser.me/api/portraits/women/14.jpg",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    caption: "Street food love 😍",
    likeCount: 7212,
    commentCount: 403,
    shareCount: 156,
    isLiked: true,
    isFollowed: true,
  },
  {
    id: 5,
    username: "natureclicks",
    userProfilePic: "https://randomuser.me/api/portraits/men/15.jpg",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    caption: "Nature therapy 🌿",
    likeCount: 3210,
    commentCount: 120,
    shareCount: 66,
    isLiked: false,
    isFollowed: false,
  },
  {
    id: 6,
    username: "dancewithriya",
    userProfilePic: "https://randomuser.me/api/portraits/women/16.jpg",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    caption: "Dance reel 🔥",
    likeCount: 9451,
    commentCount: 512,
    shareCount: 230,
    isLiked: true,
    isFollowed: false,
  },
  {
    id: 7,
    username: "techbykaran",
    userProfilePic: "https://randomuser.me/api/portraits/men/17.jpg",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    caption: "Tech life ⚡",
    likeCount: 1760,
    commentCount: 95,
    shareCount: 41,
    isLiked: false,
    isFollowed: true,
  },
  {
    id: 8,
    username: "makeupbynisha",
    userProfilePic: "https://randomuser.me/api/portraits/women/18.jpg",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    caption: "Makeup glow ✨",
    likeCount: 6322,
    commentCount: 340,
    shareCount: 144,
    isLiked: true,
    isFollowed: true,
  },
  {
    id: 9,
    username: "bikevloggers",
    userProfilePic: "https://randomuser.me/api/portraits/men/19.jpg",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    caption: "Ride mode 🏍️",
    likeCount: 2890,
    commentCount: 167,
    shareCount: 72,
    isLiked: false,
    isFollowed: false,
  },
  {
    id: 10,
    username: "artbymegha",
    userProfilePic: "https://randomuser.me/api/portraits/women/20.jpg",
    reelVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    caption: "Creative flow 🎨",
    likeCount: 4105,
    commentCount: 201,
    shareCount: 89,
    isLiked: true,
    isFollowed: true,
  },
  {
    id: 11,
    username: "memesdaily",
    userProfilePic: "https://randomuser.me/api/portraits/men/21.jpg",
    reelVideo: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4",
    caption: "Weekend mood 😂",
    likeCount: 11231,
    commentCount: 890,
    shareCount: 540,
    isLiked: true,
    isFollowed: false,
  },
  {
    id: 12,
    username: "petworld",
    userProfilePic: "https://randomuser.me/api/portraits/women/22.jpg",
    reelVideo:
      "https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4",
    caption: "Cute moment 🐶",
    likeCount: 8352,
    commentCount: 623,
    shareCount: 301,
    isLiked: false,
    isFollowed: true,
  },
  {
    id: 13,
    username: "studywithme",
    userProfilePic: "https://randomuser.me/api/portraits/men/23.jpg",
    reelVideo: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
    caption: "Study focus 📚",
    likeCount: 2290,
    commentCount: 154,
    shareCount: 47,
    isLiked: false,
    isFollowed: false,
  },
  {
    id: 14,
    username: "musicloops",
    userProfilePic: "https://randomuser.me/api/portraits/women/24.jpg",
    reelVideo: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
    caption: "Loop this 🎧",
    likeCount: 5012,
    commentCount: 266,
    shareCount: 133,
    isLiked: true,
    isFollowed: true,
  },
  {
    id: 15,
    username: "lifestylebyrohan",
    userProfilePic: "https://randomuser.me/api/portraits/men/25.jpg",
    reelVideo: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    caption: "Daily habits 🌱",
    likeCount: 3675,
    commentCount: 188,
    shareCount: 75,
    isLiked: false,
    isFollowed: false,
  },
];
var allreels = document.querySelector(".all-reels");

function addData() {
  var sum = "";

  reels.forEach((e, id) => {
    sum =
      sum +
      `<div class="reel">
            <video autoplay loop muted src="${e.reelVideo}"></video>
            <div class="bottom">
              <div class="user">
                <img
                  src="${e.userProfilePic}"
                  alt=""
                />
                <h4>${e.username}</h4>
                <button class="follow">${e.isFollowed ? "Following" : "Follow"}</button>
              </div>
              <h3>
                ${e.caption}
              </h3>
            </div>
            <div class="right">
                  <div id=${id} className="like">
                        <h4 class="like-icon">${e.isLiked ? '<i class="ri-heart-line"></i>' : '<i class=" love ri-heart-fill"></i>'}</h4>
                        <h6>${e.likeCount}</h6>
                  </div>
                   <div class="comment">
                        <h4 class="comment-icon"><i class="ri-chat-3-fill"></i></h4>
                        <h6>${e.commentCount}</h6>
                  </div>
                   <div class="share">
                        <h4 class="share-icon"><i class="ri-share-forward-fill"></i></i></h4>
                        <h6>${e.shareCount}</h6>
                  </div>
                   <div class="save">
                        <h4 class="save-icon"><i class="ri-save-3-line"></i></h4>
                        <h6>${e.shareCount}</h6>
                  </div>
                  <div class="three-dot">
                        <h4 class="threedot-icon"><i class="ri-more-2-fill"></i></h4>
                  </div>
            </div>
          </div>`;
  });

  allreels.innerHTML = sum;
}
addData();

allreels.addEventListener("click", (dets) => {
  

  console.log(dets.target.className);
  
  addData();
});
