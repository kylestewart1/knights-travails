/**
 * Stores destination of a knight's move and parent MoveNode for previous position
 * @class
 */
export class MoveNode {
    /**
     * Creates a new MoveNode.
     * @param {number} x - chess board horizontal coordinate
     * @param {number} y - chess board vertical coordinate
     * @param {MoveNode} parent - knight's previous location
     */
    constructor(x, y, parent=null) {
        this.x = x;
        this.y = y;
        this.parent = parent;
    }

    /**
     * Trace knight's moves from given node back to initial position.
     * @param {MoveNode} node - Final position in path.
     * @returns {Array} List of positions [x, y] that define knight's moves.
     */
    static path(node) {
        const path = [];
        while (node !== null) {
            path.push([node.x, node.y]);
            node = node.parent;
        }
        return path.reverse();
    }

    /**
     * Checks if position is a valid square on a chess board.
     * @param {number} x - chess board horizontal coordiante 
     * @param {number} y - chess board vertical coordinate
     * @returns {boolean} x, y between 0 and 7
     */
    static inBounds(x, y) {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    } 

    /**
     * Find all positions reachable by knight in a single move from current position.
     * @returns {Array} List of reachable squares.
     */
    allowedMoves() {
        const positions = [
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y - 1],
            [this.x + 1, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 2],
            [this.x + 1, this.y + 2]
        ];
        return positions.filter(position => MoveNode.inBounds(...position));
    }
}

