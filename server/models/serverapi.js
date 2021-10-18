const mocUsers = {
    "store": {
      "username": 1000000,
      "king": 2000000
    }
};


const isValidToken = async (token) => {
    return mocUsers.store[token]!==undefined
}

module.exports = {
    isValidToken
}