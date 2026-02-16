function aiSummaryView() {
  return `
    <div class="ai-summary">

      <h2>まとめ</h2>

      <section>
        <h3>今日の重要フレーズ</h3>
        <div id="important-phrases"></div>
      </section>

      <section>
        <h3>改善ポイント</h3>
        <div id="improvements"></div>
      </section>

      <section>
        <h3>フレーズ登録のおすすめ</h3>
        <div id="phrase-suggestions"></div>
      </section>

      <section>
        <h3>次のおすすめシナリオ</h3>
        <div id="next-scenarios"></div>
      </section>

    </div>
  `;
}