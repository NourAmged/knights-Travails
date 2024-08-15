function knightMoves(start, end) {

    const moves = [
        [-2, -1], [-1, -2], [1, -2], [2, -1],
        [2, 1], [1, 2], [-1, 2], [-2, 1]
    ];

    let queue = [[start, [start]]];
    let visited = new Set();

    while (queue.length > 0) {
        let [currentPos, path] = queue.shift();
        let [currentRow, currentCol] = currentPos;

        if (currentRow === end[0] && currentCol === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(pos => console.log(pos));
            return;
        }

        visited.add(currentPos.toString());

        for (const [rowOffset, colOffset] of moves) {
            let newRow = currentRow + rowOffset;
            let newCol = currentCol + colOffset;

            let newPos = [newRow, newCol];
            if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8 && !visited.has(newPos.toString())) {
                queue.push([newPos, [...path, newPos]]);
            }
        }
    }
}

knightMoves([3, 3], [4, 3]);