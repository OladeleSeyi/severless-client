const dev = {
  STRIPE_KEY: "pk_test_lFu9GBnsTmEVoSy21qGzOCNh00b9VWZHMJ",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-d5e7ehx25j9v",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://wb3ie53rn7.execute-api.us-east-2.amazonaws.com/dev/notes",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_7WRCghRVb",
    APP_CLIENT_ID: "4a51ksl4ad7nn2l3s2jm99ei3p",
    IDENTITY_POOL_ID: "us-east-2:5a4ed724-48d4-4b86-a6e6-01a0c9b73244",
  },
};

const prod = {
  STRIPE_KEY: "pk_test_lFu9GBnsTmEVoSy21qGzOCNh00b9VWZHMJ",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-gf7cqd6gtga5",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://zqiz8rja15.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_o7io9NJzx",
    APP_CLIENT_ID: "4ia5c2ok70ofvkgjptc0gvmgcs",
    IDENTITY_POOL_ID: "us-east-2:b82cecab-3501-4472-95de-91cfb818906f",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
