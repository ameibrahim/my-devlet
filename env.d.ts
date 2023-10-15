namespace NodeJS {
  interface ProcessEnv {
    DATABASE_STRING: string;

    ACCESS_TOKEN_TTL: number;
    REFRESH_TOKEN_TTL: number;

    INFURA_BSC_PROVIDER: string;
    INFURA_BSC_TESTNET_PROVIDER: string;
    INFURA_ETHEREUM_PROVIDER: string;
    INFURA_ETHEREUM_TESTNET_PROVIDER: string;
    INFURA_POLYGON_PROVIDER: string;
    INFURA_POLYGON_TESTNET_PROVIDER: string;
    NEXT_PUBLIC_MNEMONIC: string;

    ACCESS_TOKEN_PRIVATE_KEY: string;
    REFRESH_TOKEN_PRIVATE_KEY: string;

    SALT_WORK_FACTOR: number;

    NEXT_PUBLIC_S3_NFT_BUCKET: string;
    NEXT_PUBLIC_S3_REGION_NFT: string;
    NEXT_PUBLIC_S3_ACCESS_KEY_ID: string;
    NEXT_PUBLIC_S3_SECRET_ACCESS_KEY: string;

    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;

    NODE_RSA_PRIVATE_KEY: string;

    NEXT_PUBLIC_INFURA_API_KEY_SECRET: string;
    NEXT_PUBLIC_INFURA_IPFS_PROJECT_ID: string;
  }
}
