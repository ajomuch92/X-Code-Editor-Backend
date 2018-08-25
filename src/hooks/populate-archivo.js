// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    let data = context.result;
    let app = context.app;
    let usuario = await app.service('users').get(data.id_usuario);
    data.usuario = usuario;
    delete data.id_usuario;
    let estado = await app.service('estado-archivos').get(data.id_estado);
    data.estado = estado;
    delete data.id_estado;
    let tipo_archivo = await app.service('tipos-archivos').get(data.id_tipo_archivo);
    data.tipo_archivo = tipo_archivo;
    delete data.id_tipo_archivo;
    return context;
  };
};
