billboard = (name, price = 30) => [...new Array(name.length)].fill(price).reduce((prev, curr) => prev + curr)
