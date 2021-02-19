import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger('Main');

const config = {
  host: '127.0.0.1',
  port: 3000,
};

async function booststrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port, () => {
    logger.debug(
      `Nest application is listening on ${config.host}:${config.port}`,
    );
  });
}
booststrap();
