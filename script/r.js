const items = [
    "หน่วย Blaze 🔥",
    "Shadow Bot 👤",
    "เพชร 100K-1M 💎",
    "ไม่มีเกลือ 100% 🔒",
    "Dragon Shadow 🐉",
    "Legendary Crystal 🌟",
    "Blaze Mode 🔥",
    "Epic Shadow 👾"
  ];

  const itemList = document.getElementById('itemList');
  const resultBox = document.getElementById('result');
  const rollBtn = document.getElementById('rollBtn');
  let itemDivs = [];

  // สร้างรายการ
  items.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.id = 'item-' + index;
    div.innerHTML = `<div>${item}</div><div class="label">ได้แน่นอน 100%</div>`;
    itemList.appendChild(div);
    itemDivs.push(div);
  });

  let rolling = false;

  function startRolling() {
    if (rolling) return;
    rolling = true;
    rollBtn.disabled = true;
    resultBox.innerText = "";

    let currentIndex = 0;
    let totalLoops = 30 + Math.floor(Math.random() * 10);
    let delay = 80;

    function highlightNext() {
      itemDivs.forEach(div => div.classList.remove('active'));
      itemDivs[currentIndex].classList.add('active');

      currentIndex = (currentIndex + 1) % items.length;
      totalLoops--;

      if (totalLoops > 0) {
        setTimeout(highlightNext, delay);
        delay += 10;
      } else {
        rolling = false;
        rollBtn.disabled = false;
        let finalIndex = (currentIndex - 1 + items.length) % items.length;
        resultBox.innerText = `🎉 คุณได้: ${items[finalIndex]} 🎉`;
      }
    }

    highlightNext();
  }