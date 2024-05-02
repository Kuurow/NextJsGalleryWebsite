import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
    CLOUDINARY_CLOUD_NAME: str(),
    CLOUDINARY_API_KEY: str(),
    CLOUDINARY_API_SECRET: str(),
});

export default env