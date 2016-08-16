/**
 * Created by Bell on 16/8/16.
 */
"use strict";

var proxy = require('redbird')({port: 80});

proxy.register("node-back-template.greedlab.com", "http://localhost:4002");
proxy.register("node-front-template.greedlab.com", "http://localhost:4001");
