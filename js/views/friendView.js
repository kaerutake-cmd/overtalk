function friendView() {
  return `
    <div class="friends">

      <h2>フレンド</h2>

      <div class="search-bar">
        <input type="text" placeholder="フレンドを検索" oninput="searchFriends(this.value)">
      </div>

      <div class="friend-list"></div>

    </div>
  `;
}