import fs from "fs";
import { Api, JsonRpc } from "./libs/fibos";
import { JsSignatureProvider } from "eosjs/dist/eosjs-jssig";

async function main() {
  const accountName = process.env.accountName as string;
  const endpoint = process.env.httpEndpoint as string;
  const privateKey = process.env.privateKey as string;

  const signatureProvider = new JsSignatureProvider([privateKey]);
  const rpc = new JsonRpc(endpoint, { fetch });
  const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

  const filePath = "./sites.json";

  if (!fs.existsSync(filePath)) {
    throw new Error("File does not exist!");
  }
  const sitesText = fs.readFileSync(filePath, "utf8");

  const transaction = {
    actions: [
      {
        account: "fibos123comc",
        name: "update",
        authorization: [
          {
            actor: accountName,
            permission: "active",
          },
        ],
        data: {
          id: "sites",
          text: sitesText,
        },
      },
    ],
  };
  const transactConfig = {
    blocksBehind: 3,
    expireSeconds: 30,
  };

  const result = await api.transact(transaction, transactConfig);

  console.log(result);
}

main();
