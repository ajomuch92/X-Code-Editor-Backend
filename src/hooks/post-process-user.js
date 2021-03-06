// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    let data = context.result;
    const app = context.app;
    let imagen = await app.service('uploads').get(data.fotoPerfil);
    data.imagen = imagen;
    return context;
  };
};
