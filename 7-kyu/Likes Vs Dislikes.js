const likeOrDislike = (btns) => btns.reduce((pre, curr) => curr == pre
    ?
    pre = 'Nothing'
    :
    pre = curr, 'Nothing')