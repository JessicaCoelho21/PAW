
const explodeSound = new Audio('resources/explosion.mp3');

let gameBoard = [
	[0,0,0,1,1,1,1,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,0,0,0],
	[0,0,0,0,0,0,1,0,0,0],
	[1,0,0,0,0,0,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0],
	[1,0,0,1,0,0,0,0,0,0],
	[1,0,0,1,0,0,0,0,0,0],
	[1,0,0,0,0,0,0,0,0,0]
];

let totalPoints = countPoints(gameBoard);
let gameRound = resetRound();

function countPoints(board) {
	return board.reduce(function(acc, row){
		const rowTotal = row.reduce(function(rowAcc, val) {
			return rowAcc += (val >= 0 ? val : 0)
		}, 0)
		return acc += rowTotal
	}, 0)
}

function resetRound() {
	return gameBoard.map(function(row) {
		return row.map(() => {
			return 0;
		});
	});
}

function getStatusClassName(status) {
	if (status === 0) {
		return '';
	}
	return status > 0 ? 'explode' : 'water';
}

function renderBlock(x, y, status, className) {
	return `
		<span data-x=${ x } data-y=${ y } class="board-block ${ className } ${ getStatusClassName(status) }"></span>
	`;
}

function renderBoard() {
	let blocks = '';
	for (let i = 0; i < gameRound.length; i++) {
		const boardRow = gameRound[i];
		let rowBlocks = '';
		for (let j = 0; j < boardRow.length; j++) {
			const blockStatus = boardRow[j];
			const className = (i+j) % 2 === 0 ? 'even' : 'odd'
			rowBlocks += renderBlock(j, i, blockStatus, className);
			
		}
		blocks += rowBlocks;
	}
	return blocks;
}

function update(boardElement) {
	const board = renderBoard();
	boardElement.innerHTML = board;
}

;(function init () {
	const boardElement = document.querySelector("#board");
	if (!boardElement) {
		console.error('No board element');
		return;
	}
	boardElement.addEventListener('click', function(e) {
		const location = e.target.dataset;
		const targetStatus = gameBoard[location.y][location.x] || -1;
		gameRound[location.y][location.x] = targetStatus;
		// TODO: explain debugger;
		// debugger;
		e.target.classList.add(getStatusClassName(targetStatus));
		if (targetStatus > 0) {
			explodeSound.cloneNode(true).play();
		}
		const gamePoints = countPoints(gameRound);
		const hasFinished = gamePoints === totalPoints;
		if (hasFinished) {
			document.body.classList.add('finished');
		}
	})
	update(boardElement);
})();
