import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// import Odoo from "odoo-react";
import { useEffect, useState } from "react";

import { JSONRPCClient } from "json-rpc-2.0";

export default function Home({ client }) {
  const [data, setData] = useState({});
  // const odoo = new Odoo({
  //   host: "https://noa-ignite.odoo.com/",
  //   port: 8069 /* Defaults to 80 if not specified */,
  //   database: "noa-ignite",
  //   username:
  //     "henrik.sissener@noaignite.com" /* Optional if using a stored session_id */,
  //   password:
  //     "6ad0d8621d1e2e31df12f4612c606995449f312e" /* Optional if using a stored session_id */,
  //   // session_id: "YOUR_SESSION_ID" /* Optional if using username/password */,
  //   // context: "Your_Context" /* Optional Like Change Language */,
  // });

  const odooObject = {
    host: "https://noa-ignite.odoo.com/",
    // port: 8069 /* Defaults to 80 if not specified */,
    port: 8069 /* Defaults to 80 if not specified */,
    database: "noa-ignite",
    username:
      "henrik.sissener@noaignite.com" /* Optional if using a stored session_id */,
    password:
      "6ad0d8621d1e2e31df12f4612c606995449f312e" /* Optional if using a stored session_id */,
    // session_id: "YOUR_SESSION_ID" /* Optional if using username/password */,
    // context: "Your_Context" /* Optional Like Change Language */,
  };

  var body = JSON.stringify({
    jsonrpc: "2.0",
    method: "call",
    params: {
      db: odooObject.database,
      login: odooObject.username,
      password: odooObject.password,
      method: "version",
      service: "common",
    },
  });

  // const client = new JSONRPCClient((jsonRPCRequest) =>
  //   fetch("https://noa-ignite.odoo.com/json-rpc", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       Accept: "application/json",
  //       "X-Requested-With": "XMLHttpRequest",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: body,
  //   }).then((response) => {
  //     console.log(response);
  //     // if (response.status === 200) {
  //     //   // Use client.receive when you received a JSON-RPC response.
  //     //   return response
  //     //     .json()
  //     //     .then((jsonRPCResponse) => client.receive(jsonRPCResponse));
  //     // } else if (jsonRPCRequest.id !== undefined) {
  //     //   return Promise.reject(new Error(response.statusText));
  //     // }
  //   })
  // );

  // console.log(client);

  // console.log({ odoo });
  const testOdooFunct = () => {
    var body = JSON.stringify({
      params: {
        db: odooObject.database,
        login: odooObject.username,
        password: odooObject.password,
      },
    });

    fetch("https://noa-ignite.odoo.com/json-rpc", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        // "Content-Length": body.length,
        "X-Requested-With": "XMLHttpRequest",
        // "Access-Control-Allow-Origin": "*",
      },
      // mode: "no-cors",
      body: body,
    }).then((response) => {
      console.log(response);
      // if (response.status === 200) {
      //   // Use client.receive when you received a JSON-RPC response.
      //   return response
      //     .json()
      //     .then((jsonRPCResponse) => client.receive(jsonRPCResponse));
      // } else if (jsonRPCRequest.id !== undefined) {
      //   return Promise.reject(new Error(response.statusText));
      // }
    });
  };

  useEffect(() => {
    // testOdooFunct();
  }, []);

  // useEffect(() => {
  // odoo.authenticate((err, resp) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log("Authenticated successfully");
  //   console.log(resp);
  //   odoo.search("res.partner", { domain: [] }, (err, resp) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log("Search result");
  //     console.log(resp);
  //     setData(resp);
  //   });
  // });

  // var server = xmlrpc.createServer({ host: "localhost", port: 9090 });

  // server.on("NotFound", function (method, params) {
  //   console.log("Method " + method + " does not exist");
  // });

  // const handleAuthCallback = (error, result) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log(result);
  //   }
  // };

  // const test = odoo.authenticate(handleAuthCallback);

  // useEffect(() => {
  //   const test = axios
  //     .get("https://noa-ignite.odoo.com/web/session/authenticate")
  //     .then((res) => {
  //       console.log(res);
  //       setData(res.data);
  //     });
  // }, []);

  // const authenticateOdoo = () => {
  //   var body = JSON.stringify({
  //     params: {
  //       db: odooObject.database,
  //       login: odooObject.username,
  //       password: odooObject.password,
  //     },
  //   });
  //   var requestConfig = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Content-Length": body.length,
  //       // "X-Requested-With": "XMLHttpRequest",
  //     },
  //     data: body,
  //     withCredentials: false,
  //     baseURL: odooObject.host + ":" + odooObject.port,
  //     url: "/web/session/authenticate",
  //   };
  //   axios(requestConfig).then(
  //     (response) => {
  //       console.log(response);
  //       if (response) {
  //         // odoo.context = response.data.result.user_context;
  //         // cb(response.data.error, null);
  //       } else {
  //         console.log("hoo");
  //         // cb(null, response.data.result);
  //       }
  //     },
  //     (error) => {
  //       // cb(error, null);
  //     }
  //   );
  // };

  // useEffect(() => {
  //   authenticateOdoo();
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Odoo test</h1>
        <form>
          <div>
            <label>Customer</label>
            <input type="text" placeholder="Customer" />
          </div>
          <div>
            <label>Invoice Address</label>
            <input type="text" placeholder="Invoice Address" />
          </div>
          <div>
            <label>Delivery Address</label>
            <input type="text" placeholder="Delivery Address" />
          </div>
          <div>
            <label>Product</label>
          </div>
          <div>
            <label>Quotation Template</label>
            <select>
              <option value="1">Template 1</option>
              <option value="2">Template 2</option>
              <option value="3">Template 3</option>
            </select>
          </div>
          <div>
            <label>Expiration</label>
            <input type="date" />
          </div>
          <div>
            <label>Payment terms</label>
            <select>
              <option value="1">Payment 1</option>
              <option value="2">Payment 2</option>
              <option value="3">Payment 3</option>
            </select>
          </div>
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const odooObject = {
    host: "https://noa-ignite.odoo.com/",
    // port: 8069 /* Defaults to 80 if not specified */,
    port: 8069 /* Defaults to 80 if not specified */,
    database: "noa-ignite",
    username:
      "henrik.sissener@noaignite.com" /* Optional if using a stored session_id */,
    password:
      "6ad0d8621d1e2e31df12f4612c606995449f312e" /* Optional if using a stored session_id */,
    // session_id: "YOUR_SESSION_ID" /* Optional if using username/password */,
    // context: "Your_Context" /* Optional Like Change Language */,
  };

  var body = JSON.stringify({
    jsonrpc: "2.0",
    method: "call",
    id: 1,
    params: {
      db: odooObject.database,
      login: odooObject.username,
      password: odooObject.password,
      method: "version",
      service: "common",
      args: [
        odooObject.database,
        odooObject.username,
        odooObject.password,
        "version",
        "common",
      ],
    },
  });

  const client = new JSONRPCClient((jsonRPCRequest) =>
    fetch("https://noa-ignite.odoo.com/jsonrpc", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        // "X-Requested-With": "XMLHttpRequest",
        // "Access-Control-Allow-Origin": "*",
      },
      body: jsonRPCRequest,
    }).then((response) => {
      if (response.status === 200) {
        // Use client.receive when you received a JSON-RPC response.
        return response.json().then((jsonRPCResponse) => {
          console.log("jsonRPCResponse", jsonRPCResponse);

          client.receive(jsonRPCResponse);
        });
      } else if (jsonRPCRequest.id !== undefined) {
        return Promise.reject(new Error(response.statusText));
      }
    })
  );

  client
    .request(body)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  // console.log(client);

  return {
    props: {
      // client,
    },
  };
}
