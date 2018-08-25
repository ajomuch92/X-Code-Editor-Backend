// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    let result = context.result;
    let app = context.app;
    let idFiles = [];
    let dates = [];
    for(let i = 0; i < result.data.length; i++){
      let element = result.data[i];
      idFiles.push(element.id_archivo);
      dates.push(element.compartido);
    }
    let files = [];
    for(let j = 0; j < idFiles.length; j++){
      let element = idFiles[j];
      let file = await app.service('archivos').get(element);
      file['compartido'] = dates[j];
      files.push(file);
    }
    context.result = files;
    return context;
  };
};
