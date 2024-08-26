import Reports from './src/Reports.cjs';
import Journeys from './src/Journeys.cjs';
import Contacts from './src/Contacts.cjs';
import Campaigns from './src/Campaigns.cjs';
import AbTestCampaigns from './src/AbTestCampaigns.cjs';
import ProductAndRevenue from './src/ProductAndRevenue.cjs';
import RelationalTableRows from './src/RelationalTableRows.cjs';
import TransactionalCampaigns from './src/TransactionalCampaigns.cjs';

const Maropost = {
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
};

export default Maropost;