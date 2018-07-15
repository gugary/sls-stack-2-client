const dev = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "sls-api-dev-attachmentsbucket-1d6ippxpi7ewy"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://cq6qo7q5n7.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_ftYJN6YTE",
    APP_CLIENT_ID: "2etl65d6u2p5lsjrn1u9cmhkh1",
    IDENTITY_POOL_ID: "us-east-2:9c7bbdf6-ebf7-4f68-8408-b17cec95e759"
  }
};

const prod = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "sls-api-prod-attachmentsbucket-4xzfr425ftol"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://2p33i2orw5.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_4XEuJDCIw",
    APP_CLIENT_ID: "5oj8pekuem73gk4g9tr3jmee5",
    IDENTITY_POOL_ID: "us-east-2:789dfa14-a1ca-47ff-8765-ee724d8ab38d"
  }
};

const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
