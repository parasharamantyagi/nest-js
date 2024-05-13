import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScreenModule } from './screen/screen.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './screen/users/user.entity';
import { Post } from './screen/posts/posts.entity';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [User, Post],
    synchronize: true,
  }),
  GraphQLModule.forRootAsync({
    driver: ApolloDriver, // <--- "driver" should be here, as shown in the docs
    imports: [ConfigModule],
    useFactory: async (config: ConfigService) => {
      return {
        autoSchemaFile: 'schema.gql',
        sortSchema: true,
        debug: (config.get<string>('NODE_ENV') !== 'production') as boolean,
        uploads: false,
        path: '/graphql',
        introspection: config.get<boolean>('GRAPHQL_INTROSPECTION', false),
      } as GqlModuleOptions;
    },
    inject: [ConfigService],
  }),
    ScreenModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private dataSource: DataSource) { }
}
