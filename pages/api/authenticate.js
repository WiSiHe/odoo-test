import axios from "axios";

// const { JSONRPCServer } = require("json-rpc-2.0");

export default async function handler(req, res) {
  //   const server = new JSONRPCServer();
  try {
    const odooObject = {
      host: "https://noa-ignite.odoo.com/",
      // port: 8069 /* Defaults to 80 if not specified */,
      //   port: 8069 /* Defaults to 80 if not specified */,
      database: "noa-ignite",
      username:
        "henrik.sissener@noaignite.com" /* Optional if using a stored session_id */,
      password:
        "6ad0d8621d1e2e31df12f4612c606995449f312e" /* Optional if using a stored session_id */,
      // session_id: "YOUR_SESSION_ID" /* Optional if using username/password */,
      // context: "Your_Context" /* Optional Like Change Language */,
    };

    var body = JSON.stringify({
      params: {
        db: odooObject.database,
        login: odooObject.username,
        password: odooObject.password,
      },
    });
    var requestConfig = {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // "Content-Length": body.length,
        // "X-Requested-With": "XMLHttpRequest",
      },
      data: body,
      withCredentials: false,
      baseURL: odooObject.host + ":" + odooObject.port,
      url: "/web/session/authenticate",
    };
    const test = await fetch(requestConfig);
    // const test = await axios(requestConfig);
    console.log(test);
    res.status(200).json({ name: "John Doe" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ name: "John don't" });
  }

  //   res.status(200).json({ name: "John Doe" });
}
