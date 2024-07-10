import { logger } from './util/logger';

/**
 * Converts a JSON-serializable value to Terraform data notation.
 *
 * @param value - The value to convert.
 * @returns Terraform data notation.
 *
 * @remarks
 * Blah.
 */
export const json2tf = (value: unknown) => {
  logger.debug(`converting value`);

  return JSON.stringify(value, null, 2);
};
