export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_lFu9GBnsTmEVoSy21qGzOCNh00b9VWZHMJ",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-nuploads",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://xxrwlfg03k.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_oT3g0gsKV",
    APP_CLIENT_ID: "5phvdou3pnpa86m04bvd6ftmqb",
    IDENTITY_POOL_ID: "us-east-2:4e926972-5ef3-4d8b-9b32-d3b6b14095f7",
  },
};
