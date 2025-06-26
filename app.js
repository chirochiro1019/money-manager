let players = [];
const playersList = document.getElementById('playersList');
const playerSelect = document.getElementById('playerSelect');

// プレイヤーを追加
function addPlayer() {
    const playerName = document.getElementById('playerName').value.trim();
    if (playerName && players.length < 10) {
        players.push({ name: playerName, balance: 0 });
        updatePlayersList();
        updatePlayerSelect();
        document.getElementById('playerName').value = '';
    }
}

// プレイヤーを削除
function deletePlayer(index) {
    players.splice(index, 1);
    updatePlayersList();
    updatePlayerSelect();
}

// お金の追加
function addMoney() {
    const selectedValue = playerSelect.value;
    const amount = parseInt(document.getElementById('amount').value);
    
    if (selectedValue && !isNaN(amount)) {
        const index = parseInt(selectedValue);
        players[index].balance += amount;
        updatePlayersList();
        updatePlayerSelect();
        document.getElementById('amount').value = '';
    }
}

// お金の引去り
function subtractMoney() {
    const selectedValue = playerSelect.value;
    const amount = parseInt(document.getElementById('amount').value);
    
    if (selectedValue && !isNaN(amount)) {
        const index = parseInt(selectedValue);
        players[index].balance -= amount;
        updatePlayersList();
        updatePlayerSelect();
        document.getElementById('amount').value = '';
    }
}

// プレイヤーリストの更新
function updatePlayersList() {
    playersList.innerHTML = '';
    players.forEach((player, index) => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.innerHTML = `
            <span>${player.name}</span>
            <span>¥${player.balance.toLocaleString()}</span>
            <button onclick="deletePlayer(${index})">削除</button>
        `;
        playersList.appendChild(playerCard);
    });
}

// プレイヤーセレクトの更新
function updatePlayerSelect() {
    playerSelect.innerHTML = '<option value="">プレイヤーを選択</option>';
    players.forEach((player, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${player.name} (¥${player.balance.toLocaleString()})`;
        playerSelect.appendChild(option);
    });
}
