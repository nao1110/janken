let win = 0;
let lose = 0;
let draw = 0;

function play(userHand) {
  const hands = ['グー', 'チョキ', 'パー'];
  const naokoHand = hands[Math.floor(Math.random() * 3)];

  const handIcons = {
    'グー': '✊',
    'チョキ': '✌️',
    'パー': '🖐️'
  };

  let result = '';
  let message = '';

  if (userHand === naokoHand) {
    result = 'あいこ！';
    draw++;
    message = 'おっ、あいこ！もう一回勝負しよ♪';
  } else if (
    (userHand === 'グー' && naokoHand === 'チョキ') ||
    (userHand === 'チョキ' && naokoHand === 'パー') ||
    (userHand === 'パー' && naokoHand === 'グー')
  ) {
    result = 'あなたの勝ち！🎉';
    win++;
    message = 'く〜っ、負けた💦 また挑んでこいっ！';
  } else {
    result = 'Naokoの勝ち！😎';
    lose++;
    message = 'やったー！私の勝ち✨ もう一回？';
  }

  // 結果表示
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `
    <div class="hands">
      <span class="you">あなた ${handIcons[userHand]}（${userHand}）</span>
      <span class="versus">vs</span>
      <span class="naoko">Naoko ${handIcons[naokoHand]}（${naokoHand}）</span>
    </div>
    <div class="outcome">${result}</div>
  `;

  // 吹き出しのセリフ変更（フェード）
  const bubble = document.getElementById('bubble');
  bubble.classList.add('fade');
  setTimeout(() => {
    bubble.textContent = message;
    bubble.classList.remove('fade');
  }, 300);

  // スコア更新
  document.getElementById('win').textContent = win;
  document.getElementById('lose').textContent = lose;
  document.getElementById('draw').textContent = draw;
}

