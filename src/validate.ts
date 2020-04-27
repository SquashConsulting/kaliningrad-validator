import Ajv from 'ajv';

import schema from './schema';

/* Constants */

const ajv = new Ajv({ allErrors: true });

/* Exports */

export default validate;

/* Module Functions */

/**
 * Validates given data structure to the official
 * Kaliningrad Graph Schema
 *
 * @param data Kaliningrad Graph Structure
 * @returns `isValid` — `true` or `false`
 */
function validate(data: object): boolean | PromiseLike<any> {
  const isValid = ajv.validate(schema, data);

  return isValid;
}
