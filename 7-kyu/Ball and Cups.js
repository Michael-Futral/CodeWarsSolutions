function cupAndBalls(b, arr){

    return arr.reduce((ball, [a, b]) => a == ball? b
                                                  : b == ball
                                                  ? a
                                                  : ball
                                                  , b);
  };