// ./pages/api/myRpc.js
import { getContext } from "next-rpc/context";

const config = { rpc: true };

export async function currentUser() {
  try {
    const { req } = getContext();
    return getUserFromRequest(req);
  } catch (error) {
    console.log(error);
    return null;
  }
}
