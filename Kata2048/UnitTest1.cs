using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace Kata2048
{
    // Ein Feld initialisieren:
    //0000
    //0202
    //0000
    //0000
    // Wenn ich den Status erfrage kommt heraus:
    //0000
    //0202
    //0000
    //0000

    // In einem initialisierten Feld:
    //0000
    //0202
    //0000
    //0000
    // Wenn ich "Pfeil nach unten" drücke soll heraus kommen:
    //0000
    //0000
    //0000
    //0202

    // Game Over

    [TestClass]
    public class UnitTest1
    {
        // Wir initialisieren ein Feld 4x4 -> Zwei "2" müssen auf dem Feld verteilt sein
        [TestMethod]
        public void InitializeBoard()
        {
            var board = new Board();
            board.Initialize();
            var currentState = board.GetState();
            AssertThatThereAreTwoNumbers(2, currentState);
        }

        [TestMethod]
        public void InitializeBoardFixBoard()
        {
            var board = new Board();

            List<int[]> newBoard = CreateLayout1();

            board.Initialize(newBoard);
            var currentState = board.GetState();

            List<int[]> expected = CreateLayout1();

            currentState.ShouldAllBeEquivalentTo(expected);
        }

        [TestMethod]
        public void BoardShouldBeFourByFour()
        {
            var board = new Board();
            board.Initialize();
            var currentState = board.GetState();
            currentState.Count.Should().Be(4);
            foreach (var line in currentState)
            {
                line.Length.Should().Be(4);
            }
        }

        [TestMethod]
        public void DoFirstMoveOfTheGame()
        {
            var board = new Board();

            List<int[]> newBoard = CreateLayout1();

            board.Initialize(newBoard);
            board.DoMove(Key.Down);

            var currentState = board.GetState();

            List<int[]> expected = CreateLayout2();

            for(int i=0; i < currentState.Count; i++)
            {
                currentState[i].ShouldBeEquivalentTo(expected[i]);
            }
        }

        private static List<int[]> CreateLayout2()
        {
            var newBoard = new List<int[]>();
            var newfirst = new int[] { 0, 0, 0, 0 };
            var newsecond = new int[] { 0, 0, 0, 0 };
            var newthird = new int[] { 0, 0, 0, 0 };
            var newfourth = new int[] { 0, 2, 0, 2 };
            newBoard.Add(newfirst);
            newBoard.Add(newsecond);
            newBoard.Add(newthird);
            newBoard.Add(newfourth);
            return newBoard;
        }


        private static List<int[]> CreateLayout1()
        {
            var newBoard = new List<int[]>();
            var newfirst = new int[] { 0, 0, 0, 0 };
            var newsecond = new int[] { 0, 2, 0, 2 };
            var newthird = new int[] { 0, 0, 0, 0 };
            var newfourth = new int[] { 0, 0, 0, 0 };
            newBoard.Add(newfirst);
            newBoard.Add(newsecond);
            newBoard.Add(newthird);
            newBoard.Add(newfourth);
            return newBoard;
        }

        private static void AssertThatThereAreTwoNumbers(int expectedCount, List<int[]> currentState)
        {
            var twoCounter = 0;
            foreach (var line in currentState)
            {
                foreach (var position in line)
                {
                    if (position == 2)
                    {
                        twoCounter++;
                    }
                }
            }

            twoCounter.Should().Be(expectedCount);
        }
    }

    internal enum Key
    {
        Down=1
    }
}
