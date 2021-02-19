import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const usersMicroserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'users',
    protoPath: join(
      __dirname,
      '../../../../src/modules/users/grpc/users.proto',
    ),
  },
};
