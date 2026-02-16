function libraryView() {
  return `
    <div class="library">

      <div class="tabs">
        <button class="tab active" data-tab="words">単語</button>
        <button class="tab" data-tab="phrases">フレーズ</button>
      </div>

      <div class="library-list">
        <!-- 単語・フレーズ一覧 -->
      </div>

    </div>
  `;
}