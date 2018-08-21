// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const _ = require('lodash');

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    let data = context.data;
    let app = context.app;
    let estado = await app.service('estado-archivos').find({query: {estado: data.estado}});
    data.id_estado = estado.data[0]._id.toString();
    let tipo_archivo = await app.service('tipos-archivos').find({query: {name: _.capitalize(data.tipo_archivo)}});
    if(_.isEmpty(tipo_archivo.data)){
      tipo_archivo = await app.service('tipos-archivos').create({name: data.tipo_archivo, icon: 'src/assets/unknow.png'});
      data.id_tipo_archivo = tipo_archivo._id;
    } else {
      data.id_tipo_archivo = tipo_archivo.data[0]._id.toString();
    }
    data.creado = new Date();
    data.actualizado = new Date();
    delete data.estado;
    delete data.tipo_archivo;
    return context;
  };
};
