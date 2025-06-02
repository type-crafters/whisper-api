import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";

(async () => {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.setGlobalPrefix("api");
    app.enableCors();

    const host = process.env.HOST || "127.0.0.1";
    const port = process.env.PORT || 3000;

    await app.listen(port, () => console.log("Server is running at http://%s:%s/", host, port));
})();
