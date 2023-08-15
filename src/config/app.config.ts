interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Admin', 'Marketing Manager', 'Data Analyst'],
  tenantName: 'Organization',
  applicationName: 'SendQwik',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
