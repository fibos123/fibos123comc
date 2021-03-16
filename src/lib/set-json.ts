import { accountName } from '../config';
import { fibos } from './fibos';

export const setJson = async (jsonText: string) => {
  const contract = await fibos.contract('fibos123comc');
  const res = await contract.update(
    {
      id: 'sites',
      text: jsonText,
    },
    {
      authorization: accountName,
    }
  );
  return res;
};
