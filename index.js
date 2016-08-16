/**
 * Created by Bell on 16/8/16.
 */
"use strict";

var proxy = require('redbird')({port: 80});

proxy.register("node.greedlab.com/node-back-template", "http://localhost:4002");
proxy.register("node.greedlab.com/node-front-template", "http://localhost:4001");
