interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Edit your info.', 'Book a table.', 'Checkout the menus.', 'View restaurant information'],
  ownerAbilities: ['Manage restaurant information', 'Manage menus', 'Manage bookings', 'Manage tables'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e1c009ef-be79-4177-a7d4-d97885f328ee',
};
