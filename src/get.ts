import fs from "fs";
import { fibos } from "./lib/fibos";

async function main() {
  const filePath = "./sites.json";

  if (fs.existsSync(filePath)) {
    throw new Error("File already exists!");
  }

  const jsons = await fibos.getTableRows({
    json: true,
    code: "fibos123comc",
    scope: "fibos123comc",
    table: "jsons",
    table_key: "",
    lower_bound: "sites",
    upper_bound: "",
    limit: 1,
  });
  const sitesText = jsons.rows[0].text;
  const sitesJson = JSON.parse(sitesText);
  const sitesAns = JSON.stringify(sitesJson, null, 2);
  fs.writeFileSync(filePath, sitesAns, "utf8");
}

main();
