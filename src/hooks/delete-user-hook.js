// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const _ = require('lodash');
// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    let id = context.id;
    let app = context.app;
    let files = await app.service('archivos').find({query: {id_usuario: id}});
    let arrayId = _.map(files.data, f => {
      return f._id;
    });
    for(let i = 0; i < arrayId.length; i++){
      let idFile = arrayId[i];
      await app.service('archivos').remove(idFile);
    }
    let user = await app.service('users').get(id);
    await app.service('uploads').remove(user.fotoPerfil);
    return context;
  };
};
