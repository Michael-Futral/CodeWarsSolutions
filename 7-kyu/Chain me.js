function chain(v, fns) {
    return fns.reduce((v, fn)=>{
      return fn(v)
    }, v);
  }