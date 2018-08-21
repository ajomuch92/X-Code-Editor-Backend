// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    let result = context.result;
    let app = context.app;
    for(let i = 0; i < result.data.length; i++){
      let element = result.data[i];
      let usuario = await app.service('users').get(element.id_usuario);
      element.usuario = usuario;
      delete element.id_usuario;
      let estado = await app.service('estado-archivos').get(element.id_estado);
      element.estado = estado;
      delete element.id_estado;
      let tipo_archivo = await app.service('tipos-archivos').get(element.id_tipo_archivo);
      element.tipo_archivo = tipo_archivo;
      delete element.id_tipo_archivo;
    }
    return context;
  };
};
