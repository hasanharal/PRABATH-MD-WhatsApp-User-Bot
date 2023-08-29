/**
░█▀▀█ ░█▀▀█ ─█▀▀█ ░█▀▀█ ─█▀▀█ ▀▀█▀▀ ░█─░█ ── ░█▀▄▀█ ░█▀▀▄ 
░█▄▄█ ░█▄▄▀ ░█▄▄█ ░█▀▀▄ ░█▄▄█ ─░█── ░█▀▀█ ▀▀ ░█░█░█ ░█─░█ 
░█─── ░█─░█ ░█─░█ ░█▄▄█ ░█─░█ ─░█── ░█─░█ ── ░█──░█ ░█▄▄▀


* @project_name PRABATH-MD
* @author Prabath Kumara <https://github.com/prabathLK>
* @description The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier
* @link <https://github.com/prabathLK/PRABATH-MD>
* @version 1.0.0

© 2023 Prabath Kumara, SACHI-BOT. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/













export declare class TicTacToe {
    /* X PlayerName */
    playerX: string;
    /* Y PlayerName */
    playerY: string;
    /* X if true, Y if false */
    _currentTurn: boolean;
    _x: number;
    _y: number;
    _turns: number;
    constructor(playerX: string, playerY: string);
    get board(): number;
    turn(player, index: number): boolean;
    turn(player, x: number, y: number): boolean;
}
