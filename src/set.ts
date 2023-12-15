import fs from "fs";
import { fibos } from "./lib/fibos";

async function main() {
  const accountName = process.env.accountName as string;
  const filePath = "./sites.json";

  if (!fs.existsSync(filePath)) {
    throw new Error("File does not exist!");
  }
  const sitesText = fs.readFileSync(filePath, "utf8");
  
  const contract = await fibos.contract("fibos123comc");
  const result = await contract.update(
    {
      id: "sites",
      text: sitesText,
    },
    {
      authorization: accountName,
    }
  );
  console.log(result);
}

main();
