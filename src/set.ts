import { setJson } from './lib/set-json';
import fs from 'fs';

const filePath = './sites.json';

const main = async () => {
  try {
    if (fs.existsSync(filePath)) {
      const sitesJson = fs.readFileSync(filePath, 'utf8');
      await setJson(sitesJson);
    }
  } catch (e) {
    console.log('error:');
    console.error(e);
  }
};
main();
