export const log_success = x => console.log("%c" + x, 'background: green; color: white; padding: 1%; font-size: 1rem');
export const warn = x => console.warn("%c" + x, 'padding: 1%; font-size: 1rem');
export const error = x => console.error("%c" + x, 'padding: 1%; font-size: 1rem');
export const table = x => console.table(x);
export const group = x => console.group(x);
export const groupEnd = x => console.groupEnd(x);
export const alerts = x => alert(x);