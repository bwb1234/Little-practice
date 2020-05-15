function observe(data){
    if (!data || typeof data !== 'object') {
      return;
  }
  Object.keys(data).forEach(function(key){
    defineReactive(data, key, data[key]);
  
  })
  
  }