const dialogBox = document.getElementById('dialog-box');
const dialogTitle = dialogBox.querySelector('.dialog-title');
const dialogCloseBtn = dialogBox.querySelector('.dialog-close-btn');
const dialogBody = dialogBox.querySelector('.dialog-body');
const dialogInput = dialogBox.querySelector('#dialog-input');
const dialogSendBtn = dialogBox.querySelector('#dialog-send-btn');

// 儲存對話訊息的陣列
let messages = [];

// 顯示對話框
function showDialogBox() {
    dialogBox.style.display = 'block';
}

// 隱藏對話框
function hideDialogBox() {
    dialogBox.style.display = 'none';
}

// 顯示對話訊息
function renderMessages() {
    dialogBody.innerHTML = '';

    messages.forEach((message) => {
        const div = document.createElement('div');
        div.classList.add('dialog-message');
        div.textContent = message.text;

        if (message.isSelf) {
            div.classList.add('dialog-message-self');
        } else {
            div.classList.add('dialog-message-other');
        }

        dialogBody.appendChild(div);
    });

    // 捲動到最底部
    dialogBody.scrollTop = dialogBody.scrollHeight;
}

// 新增對話訊息
function addMessage(text, isSelf = false) {
    const message = { text, isSelf };
    messages.push(message);
    renderMessages();
}

// 發送對話訊息
function sendMessage() {
    const text = dialogInput.value.trim();

    if (text === '') {
        return;
    }

    addMessage(text, true);
    dialogInput.value = '';
}

// 按下enter鍵發送訊息
function handleKeyDown(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// 按下發送按鈕發送訊息
dialogSendBtn.addEventListener('click', sendMessage);

// 按下關閉按鈕關閉對話框
dialogCloseBtn.addEventListener('click', hideDialogBox);

// 按下enter鍵發送訊息
dialogInput.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        showDialogBox();
    }
}