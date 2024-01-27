import * as Reports from'./src/Reports.cjs';
import * as Journeys from'./src/Journeys.cjs';
import * as Contacts from'./src/Contacts.cjs';
import * as Campaigns from'./src/Campaigns.cjs';
import * as AbTestCampaigns from'./src/AbTestCampaigns.cjs';
import * as ProductAndRevenue from'./src/ProductAndRevenue.cjs';
import * as RelationalTableRows from'./src/RelationalTableRows.cjs';
import * as TransactionalCampaigns from'./src/TransactionalCampaigns.cjs';

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