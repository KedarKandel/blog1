const mongoose = require("mongoose");

const testDataSchema = new mongoose.Schema({
  CaseCurrentStatus: {
    type: String
  },
  CaseDescription: {
    type: String
  },
  RequestorFirstName: {
    type: String
  },
  RequestorLastName: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  CaseLat: {
    type: Number
  },
  CaseLong: {
    type: Number
  },
  ServiceName: {
    type: String
  },
  CaseAddressString: {
    type: String
  }
});
const TestData = mongoose.model("testData", testDataSchema);

module.exports = {
  TestData
};
