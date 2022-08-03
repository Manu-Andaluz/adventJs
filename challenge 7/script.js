const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }
  
  const otroAlmacen = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
  }
  
  function contains(store,product){
    
    const values = Object.values(store);
    let found;
    for(let value of values){
      found = typeof value == 'object' ? contains(value,product) : value === product;
      if(found){return true}
    }
    return false;
  } 
    
  contains(otroAlmacen,'cd-rom');               