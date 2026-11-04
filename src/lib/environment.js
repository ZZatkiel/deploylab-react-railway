export function normalizeEnvironment(value) {
  const environment = String(value ?? 'local').trim().toLowerCase();
  return ['local', 'staging', 'production'].includes(environment)
    ? environment
    : 'local';
}

export function environmentLabel(value) {
  return ({ local: 'Desarrollo local', staging: 'Staging', production: 'Production' })[
    normalizeEnvironment(value)
  ];
}
