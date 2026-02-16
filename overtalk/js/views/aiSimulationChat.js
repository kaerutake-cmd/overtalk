function aiSimulationChatView() {
  return `
    <div class="ai-chat">

      <div class="messages">
        <!-- AIとユーザーの7ターン -->
      </div>

      <div class="chat-tools">
        <button id="ai-correct">AI添削</button>
        <button id="translate">翻訳</button>
      </div>

      <div class="input-area">
        <textarea placeholder="返答を入力"></textarea>
        <button id="send">送信</button>
      </div>

    </div>
  `;
}