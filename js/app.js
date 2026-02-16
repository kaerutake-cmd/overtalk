// ▼ ① ヘッダー設定
function setHeader(title) {
  document.getElementById("header").innerHTML = title;
}

// ▼ ② 全ユーザー（共通データ）
const users = [
  { name: "Alice", level: "初級", lat: 35.68, lng: 139.76 },
  { name: "Bob", level: "中級", lat: 35.62, lng: 139.90 },
  { name: "Charlie", level: "上級", lat: 35.70, lng: 139.80 }
];

// ▼ ③ フレンドデータ
const friends = [
  { name: "Alice", level: "初級", online: true },
  { name: "Bob", level: "中級", online: false }
];

// ▼ ④ 全ユーザー表示（ホーム画面用）
function showAllUsers() {
  let userCards = "";
  users.forEach(user => {
    userCards += `
      <div class="user-card">
        <img src="https://via.placeholder.com/50" />
        <div class="info">
          <p>${user.name}</p>
          <p>英語：<span class="tag">${user.level}</span></p>
        </div>
      </div>
    `;
  });

  document.querySelector(".user-list").innerHTML = userCards;
}

// ▼ ⑤ 名前検索（ホーム画面用）
function filterUsers(keyword) {
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(keyword.toLowerCase())
  );

  let userCards = "";
  filtered.forEach(user => {
    userCards += `
      <div class="user-card">
        <img src="https://via.placeholder.com/50" />
        <div class="info">
          <p>${user.name}</p>
          <p>英語：<span class="tag">${user.level}</span></p>
        </div>
      </div>
    `;
  });

  document.querySelector(".user-list").innerHTML = userCards;
}

// ▼ ⑥ フレンド一覧表示
function showFriends() {
  let html = "";

  // オンライン → オフライン順
  const sorted = friends.sort((a, b) => b.online - a.online);

  sorted.forEach(f => {
    html += `
      <div class="user-card">
        <img src="https://via.placeholder.com/50" />
        <div class="info">
          <p>${f.name}</p>
          <p>${f.online ? "🟢 オンライン" : "⚪ オフライン"}</p>
        </div>
      </div>
    `;
  });

  document.querySelector(".friend-list").innerHTML = html;
}

// ▼ ⑦ フレンド検索
function searchFriends(keyword) {
  const filtered = friends.filter(f =>
    f.name.toLowerCase().includes(keyword.toLowerCase())
  );

  let html = "";
  filtered.forEach(f => {
    html += `
      <div class="user-card">
        <img src="https://via.placeholder.com/50" />
        <div class="info">
          <p>${f.name}</p>
          <p>${f.online ? "🟢 オンライン" : "⚪ オフライン"}</p>
        </div>
      </div>
    `;
  });

  document.querySelector(".friend-list").innerHTML = html;
}

// ▼ ⑧ 位置情報
let myLat = null;
let myLng = null;

navigator.geolocation.getCurrentPosition(pos => {
  myLat = pos.coords.latitude;
  myLng = pos.coords.longitude;
});

// ▼ ⑨ 距離計算（ハバースイン）
function getDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;

  const a =
    Math.sin(dLat/2) ** 2 +
    Math.cos(lat1 * Math.PI/180) *
    Math.cos(lat2 * Math.PI/180) *
    Math.sin(dLng/2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// ▼ ⑩ 距離フォーマット（100m単位 or km）
function formatDistance(km) {
  const meters = km * 1000;

  if (meters < 1000) {
    const m100 = Math.round(meters / 100) * 100;
    return `${m100}m`;
  } else {
    return `${km.toFixed(1)}km`;
  }
}

// ▼ ⑪ 近くの人フィルタ（距離順）
function filterNearbyUsers() {
  if (myLat === null || myLng === null) {
    alert("位置情報が取得できませんでした");
    return;
  }

  const withDistance = users.map(user => {
    const dist = getDistance(myLat, myLng, user.lat, user.lng);
    return { ...user, distance: dist };
  });

  const sorted = withDistance.sort((a, b) => a.distance - b.distance);

  let userCards = "";
  sorted.forEach(user => {
    const display = formatDistance(user.distance);

    userCards += `
      <div class="user-card">
        <img src="https://via.placeholder.com/50" />
        <div class="info">
          <p>${user.name}</p>
          <p>距離：${display}</p>
        </div>
      </div>
    `;
  });

  document.querySelector(".user-list").innerHTML = userCards;
}

// ▼ ⑫ SPA 画面遷移
function navigateTo(page) {
  const app = document.getElementById("app");

  if (page === "home") {
    setHeader("ホーム");
    app.innerHTML = homeView();
    showAllUsers();
  }

  if (page === "friends") {
    setHeader("フレンド");
    app.innerHTML = friendView();
    showFriends();
  }

  // 他の画面は後で追加
}

// ▼ ⑬ 初期表示
window.onload = () => {
  navigateTo("home");

  document.getElementById("bottom-tab").innerHTML = `
    <div class="tab" data-page="home" onclick="navigateTo('home')">🏠<br>ホーム</div>
    <div class="tab" data-page="friends" onclick="navigateTo('friends')">🤝<br>フレンド</div>
    <div class="tab" data-page="chat" onclick="navigateTo('chat')">💬<br>チャット</div>
    <div class="tab" data-page="library" onclick="navigateTo('library')">📚<br>ライブラリー</div>
    <div class="tab" data-page="group" onclick="navigateTo('group')">👥<br>グループ</div>
    <div class="tab" data-page="mypage" onclick="navigateTo('mypage')">👤<br>マイページ</div>
  `;
};