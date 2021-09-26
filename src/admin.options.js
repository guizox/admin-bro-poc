const { default: AdminBro } = require("admin-bro");
const AdminBroMongoose = require("admin-bro-mongoose");

AdminBro.registerAdapter(AdminBroMongoose);

const { Company } = require("./companies/company.entity");
const { Brand } = require("./brands/brand.entity");

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [Company, Brand],
};

module.exports = options;
