// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const _ = require('lodash');
// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const app = context.app;
    const data = context.data;
    const uploads = app.service('uploads');
    if(!_.isUndefined(data.profile)){
      const response = await uploads.create(data.profile);
      delete data.profile;
      data.fotoPerfil = response.id;
    }
    return context;
  };
};
