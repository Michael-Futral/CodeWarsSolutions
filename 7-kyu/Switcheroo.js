const switcheroo = (x) => x.split('').map(el => el == 'a' ? el = 'b' : el == 'b' ? el = 'a' : el).join('')