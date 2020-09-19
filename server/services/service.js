
const Promise = require('bluebird');
const urlMetadata = require('url-metadata')





exports.OepnGraphParameter = (res, callback) => {
  const promise = new Promise(function (resolve, reject) {
    let registerData = res.body;
    const options = {
      encode: function (value) {
        return encodeURIComponent(value).replace(/['*]/g, escape)
      }
    }
    urlMetadata(registerData.url, { encode: options }).then(
      function (metadata) { // success handler
        return resolve(metadata);
      },
      function (error) { // failure handler
        return reject(error)
      })
      .catch(function (err) {
        console.error(err);
        return callback(err);
      });
  });

  if (callback !== null && typeof callback === 'function') {
    promise
      .then(function (data) {
        return callback(null, data);
      })
      .catch(function (err) {
        return callback(err);
      });
  } else {
    return promise;
  }
};
