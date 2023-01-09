const d2CElem = document.createElement('div');
function dashCaseToCamelCase(s: string) {
  const dataAttributeNameDashCase = `data-${s}`;
  d2CElem.setAttribute(dataAttributeNameDashCase, '');
  const attributeNameCamelCase = Object.keys({ ...d2CElem.dataset })[0];
  d2CElem.removeAttribute(dataAttributeNameDashCase);
  return attributeNameCamelCase;
}

function camelCaseToDashCase(s: string) {
  d2CElem.dataset[s] = '';
  const dataAttributeNameDashCase = d2CElem.getAttributeNames()[0];
  d2CElem.removeAttribute(dataAttributeNameDashCase);
  const attributeNameDashCase = dataAttributeNameDashCase.replace(/^data-/, '');
  return attributeNameDashCase;
}

export { dashCaseToCamelCase, camelCaseToDashCase };
