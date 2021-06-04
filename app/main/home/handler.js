const ClientService = require("../client/service");
const UserInfo = require("../userInfo/service");
const clientService = new ClientService();
const userInfo = new UserInfo();

const returnViewMessage = (h, message = '', user = null) => {
  return h.view("message.ejs", { message, user });

}

exports.renderCheckInfo = {
  auth: false,
  handler: async (request, h) => {
    const query = {
      limit: 5,
      offset: 0,
    };
    if (request.payload) {
      query.q = request.payload.inputNameClient;
    }
    const clients = await clientService.getMany(query);

    return h.view("checkInfo.ejs", { clients });
  },
};

exports.createClient = {
  auth: false,
  handler: async (request, h) => {
    if (request.payload) {
      const payload = {
        name_client: request.payload.inputNameClient,
        url_redirect: request.payload.inputUrl,
      };
      try {
        await clientService.createOne(payload);
        return returnViewMessage(h, "Success");
      } catch (error) {
        return returnViewMessage(h, "Insert new data failed");
      }
    } else {
      return h.view("index.ejs");
    }
  },
};

exports.register = {
  auth: false,
  handler: async (request, h) => {
    if (request.payload) {
      const payload = {
        username: request.payload.inputUsername,
        password: request.payload.inputPassword,
        firstname: request.payload.inputFirstName,
        lastname: request.payload.inputLastName,
        email: request.payload.inputEmail,
        phone: request.payload.inputPhoneNumber,
        address: request.payload.inputAddress,
      };
      try {
        await userInfo.createOne(payload);
        return returnViewMessage(h, "Success");
      } catch (error) {
        return returnViewMessage(h, "Username is existing");
      }
    } else {
      return h.view("register.ejs");
    }
  },
};

exports.login = {
  auth: false,
  handler: async (request, h) => {
    if (request.payload) {
      const payload = {
        clientId: request.payload.inputClientId,
        name_client: request.payload.inputNameClient,
        state: request.payload.inputState,
        url_redirect: request.payload.inputRedirectUrl,
      };
      const isVerified = await clientService.verify(payload);
      if (!isVerified) {
        return returnViewMessage(h, "Not found");
      } else {
        try {
          const user = await userInfo.login({
            username: request.payload.inputUsername,
            password: request.payload.inputPassword,
          });
          return returnViewMessage(h, "Success", user);
        } catch (error) {
          return returnViewMessage(h, "Incorrect email or password");

        }
      }
    } else {
      return h.view("login.ejs");
    }
  },
};
