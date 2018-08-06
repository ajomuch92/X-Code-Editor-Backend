// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const errors = require('@feathersjs/errors');
// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const app = context.app;
    const data = context.data;
    const uploads = app.service('uploads');
    const users = context.service;
    const user = await users.find({query: {email: data.email}});
    if(user.total == 0){
      const response = await uploads.create(data.profile);
      delete data.profile;
      data.fotoPerfil = response.id;
      data.createdAt = new Date();
      data.updatedAt = new Date();
    } else {
      return new errors.BadRequest({mensaje: 'El correo ya se encuentra registrado'});
    }
    return context;
  };
};
