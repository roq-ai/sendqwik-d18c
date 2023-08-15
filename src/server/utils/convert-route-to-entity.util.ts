const mapping: Record<string, string> = {
  alerts: 'alert',
  campaigns: 'campaign',
  dashboards: 'dashboard',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
