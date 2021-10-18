import http from "../services/http-common";

const send = (data) => {
  return http.post("/startSignal", data);
};

const Action = {
    send
};

export default Action;