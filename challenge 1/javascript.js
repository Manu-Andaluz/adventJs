let ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

  const ROJO = 'rojo';

  function contarOvejas() {
      return ovejas.filter(({ name, color }) => {
          const lowerCaseName = name.toLowerCase();
          return color === ROJO && lowerCaseName.includes('n') && lowerCaseName.includes('a');
      });
  }

  //sentence.includes(word)