"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_middelware_1 = require("./midldleware/logger.middelware");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(logger_middelware_1.loggerGlobal);
    app.useGlobalPipes(new common_1.ValidationPipe);
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle("Demo Nest")
        .setDescription("Esta es una API construida con Nest para ser empleada en las demos de la clase")
        .setVersion("1.0")
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup("api", app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map