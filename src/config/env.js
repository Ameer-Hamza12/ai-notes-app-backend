import dotenv from "dotenv";

dotenv.config();

const env = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  clientUrl: process.env.CLIENT_URL || "http://localhost:3000",
  mongoUri:
    process.env.MONGODB_URI || "mongodb://localhost:27017/ai-notes-app",
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET || "local-access-secret",
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || "local-refresh-secret",
};

export default env;