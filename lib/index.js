/**
 * Created by rathawut on 5/27/16.
 */
const redis = require('redis');
const pkg = require('../package.json');

const hapiRedis = {
  register: function register(server, options, next) {
    const client = redis.createClient(options);
    server.expose('client', client);
    next();
  },
};

hapiRedis.register.attributes = {
  pkg,
};

module.exports = hapiRedis;
