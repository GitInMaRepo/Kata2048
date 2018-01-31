using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace Kata2048
{ 
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
}
