const newFile = true;

const promise = new Promise((resolve, reject) =>{
  if(newFile){
    resolve('Sedang dijalankan');
  }else{
    reject('Ditolak');
  }
})

promise
  .then(Respone = (respone) => respone);
  .catch(Respone = (respone) => respone);
