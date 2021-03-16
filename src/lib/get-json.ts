import { fibos } from './fibos';

export const getJson = async () => {
  const jsons = await fibos.getTableRows({
    json: true,
    code: 'fibos123comc',
    scope: 'fibos123comc',
    table: 'jsons',
    table_key: '',
    lower_bound: 'sites',
    upper_bound: '',
    limit: 1,
  });

  return jsons.rows[0].text;
};
