import FIBOS from "fibos.js";

const httpEndpoint = process.env.httpEndpoint as string;
const privateKey = process.env.privateKey as string;

export const fibos = FIBOS({
  chainId: "6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
  keyProvider: privateKey,
  httpEndpoint: httpEndpoint,
});
