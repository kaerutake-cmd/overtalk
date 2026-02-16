function myPageView() {
  return `
    <div class="mypage">

      <div class="profile-section">
        <img class="profile-img" src="" alt="">
        <h2 id="username"></h2>
        <button id="edit-profile">プロフィール編集</button>
      </div>

      <ul class="mypage-menu">
        <li data-view="album">マイアルバム</li>
        <li data-view="posts">投稿</li>
        <li data-view="notifications">通知設定</li>
        <li data-view="blocked">ブロック一覧</li>
        <li data-view="password">パスワード変更</li>
        <li data-view="logout">ログアウト</li>
        <li data-view="withdraw">退会</li>
      </ul>

    </div>
  `;
}