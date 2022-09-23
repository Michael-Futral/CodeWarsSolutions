const logicalCalc = (array, op) => !!array.reduce((pre, curr)=>
                                                  op == 'AND'
                                                  ?
                                                  pre && curr
                                                  :
                                                  op == 'OR'
                                                  ?
                                                  pre || curr
                                                  :
                                                  pre ^ curr)