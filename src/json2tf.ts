import { isArray, isPlainObject, isPrimitive } from 'is-what';

/**
 * json2tf options
 *
 * @param offset - The number of spaces to indent the entire block.
 * @param tabWidth - The number of spaces to use for each tab.
 */
interface Json2tfOptions {
  offset?: number;
  tabWidth?: number;
}

/**
 * Converts a JSON-serializable value to Terraform data notation.
 *
 * @param value - The value to convert.
 * @param options - Conversion options.
 * @returns Terraform data notation.
 */
export const json2tf = (
  value: unknown,
  { offset = 0, tabWidth = 4 }: Json2tfOptions = {},
) => {
  if (isPrimitive(value)) return JSON.stringify(value);

  if (isArray(value)) {
    if (!value.length) return '[]';

    let tf = '[';
    for (let i = 0; i < value.length; i++)
      tf += `\n${' '.repeat(offset + tabWidth)}${json2tf(value[i], {
        offset: offset + tabWidth,
        tabWidth,
      })}${i + 1 < value.length ? ',' : ''}`;
    return `${tf}\n${' '.repeat(offset)}]`;
  }

  if (isPlainObject(value)) {
    if (!Object.keys(value).length) return '{}';

    let tf = '{';
    for (const [key, val] of Object.entries(value))
      tf += `\n${' '.repeat(offset + tabWidth)}${key} = ${json2tf(val, {
        offset: offset + tabWidth,
        tabWidth,
      })}`;
    return `${tf}\n${' '.repeat(offset)}}`;
  }

  throw new Error(`Unsupported value: ${value as string}`);
};
