// ルーティング設定
const routes = {
  home: homeView,
  chat: chatListView,
  library: libraryView,
  group: groupListView,
  mypage: myPageView,
};

// 画面切り替え
function navigateTo(page) {
  const view = routes[page];
  if (view) {
    document.getElementById("app").innerHTML = view();
  }

  // ▼ アクティブタブの切り替え
  const tabs = document.querySelectorAll("#bottom-tab .tab");
  tabs.forEach(tab => tab.classList.remove("active"));

  const activeTab = document.querySelector(`#bottom-tab .tab[data-page="${page}"]`);
  if (activeTab) {
    activeTab.classList.add("active");
  }

  // ▼ ヘッダーのタイトル切り替え
  const titles = {
    home: "ホーム",
    chat: "チャット",
    library: "ライブラリー",
    group: "グループ",
    mypage: "マイページ"
  };

  setHeader(titles[page] || "");
}