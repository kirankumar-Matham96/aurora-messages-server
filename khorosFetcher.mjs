import { xml2json } from "xml-js";
import got from "got";

const community = {
  address: "italent2.demo.lithium.com",
  username: "iTalent_Aurora",
  password: "Q!w2e3r4t5",
};

const getToken = async (communityAddress, username, password) => {
  const url = `https://${communityAddress}/restapi/vc/authentication/sessions/login`;

  const response = await got
    .post(url, {
      form: {
        "user.login": username,
        "user.password": password,
      },
    })
    .text();

  const jsonReponse = JSON.parse(
    xml2json(response, {
      compact: true,
    })
  );
  const sessionKey = jsonReponse.response.value._text;

  return sessionKey;
};

const { address, username, password } = community;
getToken(address, username, password).then((response) => {
  console.log("respnose is ", response);
});

const token = await getToken(address, username, password);
const khorosApi = got.extend({
  prefixUrl: `https://${address}/api/2.0/`,
  headers: {
    "li-api-session-key": token,
  },
});

export const getMessages = async () => {
  const response = await khorosApi
    .post("search", {
      json: [
        {
          messages: {
            fields: ["id", "subject"],
          },
        },
      ],
    })
    .json();

  console.log("response is ", response);

  return response;
};
