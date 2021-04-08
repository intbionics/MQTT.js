'use strict'

/*
  variables port and host can be removed since
  you have all required information in opts object
*/
function streamBuilder (client, opts, netClient) {
  var port, host
  opts.port = opts.port || 1883
  opts.hostname = opts.hostname || opts.host || 'localhost'

  port = opts.port
  host = opts.hostname

  if(!netClient){
    var netClient = require('net');
    var debug = require('debug')('mqttjs:tcp');
    debug('port %d and host %s', port, host);
  }
  if(process.env.NODE_ENV === 'development'){
    console.log('mqtt connect', opts, netClient);
  }
  return netClient.createConnection(port, host);
}

module.exports = streamBuilder
