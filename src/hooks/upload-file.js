// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const app = context.app;
    const data = context.data;
    if(!data.extension){
      let fileName = data.name;
      data.extension = fileName.substr(fileName.lastIndexOf('.') + 1);
    }
    const uploads = app.service('uploads');
    const response = await uploads.create({uri: data.uri});
    delete data.uri;
    data.url = './public/uploads/'+response.id;
    data.createdAt = new Date();
    data.updatedAt = new Date();
    return context;
  };
};
