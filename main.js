import { MoveNode } from "./MoveNode.js";

/** 
* Compute shortest path between two squares on a chess board for a knight.
* Constructs a graph of possible moves and finds solution using breadth-first search.
* @param {Array} start - knight's starting position as [x, y], x,y from 0 through 7
* @param {Array} end - desired ending position for which to find path as [x, y]
* @returns {Array} List of positions that define the shortest path.
*/
function knightMoves(start, end) {
    if (start === end) {
        return [];
    }

    const queue = [new MoveNode(start[0], start[1])];
    while (queue.length !== 0) {
        const node = queue.pop();
        if (node.x === end[0] && node.y === end[1]) {
            return MoveNode.path(node);
        }
        node.allowedMoves().forEach(position => queue.unshift(new MoveNode(position[0], position[1], node)));
    }
    
    
}

/**
 * Prints number of moves and the positions in path to the console.
 * @param {Array} path - List of positions [x, y] that make up knight's path.
 */
function describeSolution(path) {
    console.log(`You made it in ${path.length - 1} moves!`);
    console.log("Your path: ")
    path.forEach(position => console.log(position));
}


// Example
const start = [0, 0];
const end = [7, 7];
const path = knightMoves(start, end);
describeSolution(path);
