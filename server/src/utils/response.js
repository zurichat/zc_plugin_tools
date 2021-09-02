module.exports = (response, data = null, success = null) => {
  if (typeof response !== "string" && !response.message)
    throw "Invalid Response Format";

  response = {
    message: response.message ?? response,
    success: success ?? true,
  };

  response.data = data;

  if (data?.docs) {
    const { docs, ...meta } = data;
    response.data = docs;
    response.meta = meta;
  }

  return response;
};
