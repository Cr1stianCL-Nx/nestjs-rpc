import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
export const buildProto = () => {
  const result = join(__dirname, './hero.hero.proto');
  console.log('result==>', result);
  return result;
};

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero', // ['hero', 'hero2']
    protoPath: join(buildProto()), // ['./hero/hero.proto', './hero/hero2.proto']
  },
};
