module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: 'AKIA4IO4PRKHP2ND3KU7',
        secretAccessKey: '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',
        region:'US East (Ohio) us-east-2',
        params: {
          Bucket: 'cadmus-bucket',
        },
      },
    },
  });
  