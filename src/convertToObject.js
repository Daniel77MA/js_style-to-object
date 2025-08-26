'use strict';
/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const styleRules = sourceString.split(';').map(rule => rule.trim()).filter(Boolean);

  for (const rule of styleRules) {
    const [property, value] = rule.split(':').map(item => item.trim());
    styleObject[property] = value;
  }

  return styleObject;
}

module.exports = convertToObject;
