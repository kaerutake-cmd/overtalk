function homeView() {

  return `
    <div class="home">

      <h2>ホーム</h2>

      <div class="search-bar">
        <input type="text" placeholder="ユーザーを検索" oninput="filterUsers(this.value)">

        <div class="switch-buttons">
          <button onclick="showAllUsers()" class="switch-btn">全ユーザー</button>
          <button onclick="filterNearbyUsers()" class="switch-btn">📍近くの人</button>
        </div>
      </div>

      <div class="user-list"></div>

    </div>
  `;
}