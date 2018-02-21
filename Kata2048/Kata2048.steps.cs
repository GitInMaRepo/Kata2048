using FluentAssertions;
using System;
using System.Collections.Generic;
using TechTalk.SpecFlow;

namespace Kata2048
{
    [Binding]
    public class Kata2048Steps
    {
        [Given(@"das Spield ist vorbelegt mit")]
        public void AngenommenDasSpieldIstVorbelegtMit(Table table)
        {
            var board = new Board();

            List<int[]> list = GetBoardFromSpecflowTable(table);
            board.Initialize(list);
            ScenarioContext.Current.Set<Board>(board);
        }        

        [When(@"ich die Pfeiltaste ""(.*)"" drücke")]
        public void WennIchDiePfeiltasteDrucke(string keyCode)
        {
            Key currentKey;
            switch(keyCode)
            {
                case "nach unten":
                    currentKey = Key.Down;
                    break;
                case "nach oben":
                    currentKey = Key.Up;
                    break;
                default:
                    currentKey = Key.None;
                    break;
            }
            var board = ScenarioContext.Current.Get<Board>();
            board.DoMove(currentKey);            
        }
        
        [Then(@"soll das Spielfeld so aussehen")]
        public void DannSollDasSpielfeldSoAussehen(Table table)
        {
            var board = ScenarioContext.Current.Get<Board>();
            var currentState = board.GetState();

            var expected = GetBoardFromSpecflowTable(table);

            for (int i = 0; i < currentState.Count; i++)
            {
                currentState[i].ShouldBeEquivalentTo(expected[i]);
            }            
        }

        private static List<int[]> GetBoardFromSpecflowTable(Table table)
        {
            var list = new List<int[]>();
            foreach (TableRow row in table.Rows)
            {
                var sth = new int[] { Convert.ToInt32(row[0]), Convert.ToInt32(row[1]), Convert.ToInt32(row[2]), Convert.ToInt32(row[3]) };
                list.Add(sth);
            }

            return list;
        }
    }
}
