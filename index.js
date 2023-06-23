class Archivio {
  constructor(libri) {
    this.libri = libri;
  }

  cercaLibri(stringa) {
    //libri.forEach((libro,i)=> console.log(libro.includes(stringa)))
    //const l = libri.map((libro,i)=> (libro.includes(stringa))) --> console.log(l)
    
    let x = this.libri.filter((libro) => {
      return libro.titolo.toLowerCase().includes(stringa.toLowerCase());
      });
      console.log(x)
  } 
  
  Ricerca(titolo) {
    const libroTrovato = this.libri.find((libro) => libro.titolo.toLowerCase() === titolo.toLowerCase());

    if (libroTrovato) {
      console.log(`Il libro "${titolo}" è presente nell'archivio.`);
    } else {
      console.log(`Il libro "${titolo}" non è presente nell'archivio.`);
    }
  }
}


const base =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
const op = 'get';
const key = '1f1f8a44';

const URL = base + '/' + op + '?key=' + key;
console.log(URL);

fetch(URL)
  .then(
    (response) => response.json(),
    (error) => alert(error)
  )
  .then((data) => {
    console.log(data);
    try {
      const db = JSON.parse(data);
      console.log(db);

      // Creazione dell'istanza della classe Archivio
      const archivio = new Archivio(db);

      // Esempio di utilizzo del metodo Ricerca
      archivio.Ricerca("Divina commedia");
      archivio.cercaLibri('COMMEDIA');
    } catch (error) {
      console.error('Errore', error);
    }
  });