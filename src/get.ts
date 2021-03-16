import { getJson } from './lib/get-json';
import fs from 'fs';

const filePath = './sites.json';

const main = async () => {
  try {
    if (!fs.existsSync(filePath)) {
      const sites = await getJson();
      const sitesJson = JSON.parse(sites);
      const sitesAns = JSON.stringify(sitesJson, null, 2);
      fs.writeFileSync(filePath, sitesAns, 'utf8');
    }
  } catch (e) {
    console.log('error:');
    console.error(e);
  }
};
main();
