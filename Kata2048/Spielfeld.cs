using System;
using System.Collections.Generic;

namespace Kata2048
{
    internal class Board
    { 
        private List<int[]> board { get; set; }

        public Board()
        {
        }

        internal void Initialize()
        {
            board = new List<int[]>
            {
                new int[4] { 0, 0, 0, 0 },
                new int[4] { 0, 0, 0, 0 },
                new int[4] { 0, 0, 0, 0 },
                new int[4] { 0, 0, 0, 0 }
            };

            Random rnd = new Random();
            var one = rnd.Next(0, 4);
            var two = rnd.Next(0, 4);
            var three = rnd.Next(0, 4);
            var four = rnd.Next(0, 4);

            board[one][two] = 2;
            
            while (one == three && two == four)
            {
                three = rnd.Next(0, 4);
                four = rnd.Next(0, 4);
            }
            board[three][four] = 2;
        }
        internal void Initialize(List<int[]> newBoard)
        {
            board = newBoard;
        }

        internal List<int[]> GetState()
        {
            return board;
        }

        internal void DoMove(Key down)
        {
            var zeile = board[1];
            board[1] = board[3];            
            board[3] = zeile;            
        }
    }
}