'use strict';

/**
 * donator service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::donator.donator');
