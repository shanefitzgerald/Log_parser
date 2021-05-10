import fsp from 'fs/promises';
import { parseLogs } from './parse/parse.js';
import { dedupe, topFrequent } from './util/utils.js';

(async () => {
  try {
    const file = await fsp.readFile(new URL('./raw-data.log', import.meta.url));
    const logs = parseLogs(file);

    const ips = logs.map(({ ip }) => ip);
    const urls = logs.map(({ url }) => url);
    const answers = {
      uniqueIPs: dedupe(ips).length,
      topURLs: topFrequent(urls, 3),
      topIPs: topFrequent(ips, 3)
    };

    console.table(answers);
  } catch (error) {
    throw new Error(`err::: ${error}`);
  }
})();
