const users = require('./users/users.service.js');
const tiposUsuarios = require('./tipos-usuarios/tipos-usuarios.service.js');
const planes = require('./planes/planes.service.js');
const planesUsuario = require('./planes-usuario/planes-usuario.service.js');
const estadoArchivos = require('./estado-archivos/estado-archivos.service.js');
const archivosCompartidosUsuario = require('./archivos-compartidos-usuario/archivos-compartidos-usuario.service.js');
const mensajesArchivo = require('./mensajes-archivo/mensajes-archivo.service.js');
const archivos = require('./archivos/archivos.service.js');
const uploads = require('./uploads/uploads.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(tiposUsuarios);
  app.configure(planes);
  app.configure(planesUsuario);
  app.configure(estadoArchivos);
  app.configure(archivosCompartidosUsuario);
  app.configure(mensajesArchivo);
  app.configure(archivos);
  app.configure(uploads);
};
