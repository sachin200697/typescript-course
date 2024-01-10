/*
    enum is similar to object but we create it to signel other developers that these values
    are closely related to each other
    we use enum when we already know the all possible values
*/
export enum MatchResult {
    HomeWin = "H",
    AwayWin = "A",
    Draw = "D",
  }
  
  /*
      //we can also create an enum like:
      enum MatchResult {
          HomeWin,
          AwayWin,
          Draw
      }
  
      We can return enum from a function like:
  
      function(): MatchResult {
          return MatchResult.HomeWin;
      }
  */
  