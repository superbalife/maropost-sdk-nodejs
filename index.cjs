const Reports = require('./src/Reports.cjs');
const Journeys = require('./src/Journeys.cjs');
const Contacts = require('./src/Contacts.cjs');
const Campaigns = require('./src/Campaigns.cjs');
const AbTestCampaigns = require('./src/AbTestCampaigns.cjs');
const ProductAndRevenue = require('./src/ProductAndRevenue.cjs');
const RelationalTableRows = require('./src/RelationalTableRows.cjs');
const TransactionalCampaigns = require('./src/TransactionalCampaigns.cjs');

module.exports = 
{
  Maropost: {
    Api: {
      AbTestCampaigns,
      Campaigns,
      Contacts,
      Journeys,
      ProductAndRevenue,
      RelationalTableRows,
      Reports,
      TransactionalCampaigns
    }
  }
};