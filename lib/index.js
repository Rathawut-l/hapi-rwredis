/**
 * Created by rathawut on 5/27/16.
 */
const redis = require('redis');

const hapiRedis = {
  register: function register(server, options, next) {
    const client = redis.createClient(options);
    server.expose('client', client);
    next();
  },
};

hapiRedis.register.attributes = {
  pkg: '../package.json',
};

module.exports = hapiRedis;
