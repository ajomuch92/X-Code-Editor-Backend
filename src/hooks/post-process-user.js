// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const _ = require('lodash');

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    let result = context.result.data;
    const app = context.app;
    const tipos_usuarios = app.service('tipos-usuarios');
    _.forEach(result, async (record)=>{
      let tipo_usuario_encontrado = await tipos_usuarios.get(record.tipo_usuario);
      record.tipo_usuario = tipo_usuario_encontrado;
    });
    return context;
  };
};
