import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { DataSource } from 'typeorm';
import { loggerMiddleware } from './logger.Middleware';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      buildSchemaOptions: {
        fieldMiddleware: [loggerMiddleware],
      },
    }),
    PostsModule
    // GraphQLModule.forRootAsync({
    //   driver: ApolloDriver, // <--- "driver" should be here, as shown in the docs
    //   imports: [ConfigModule],
    //   useFactory: async (config: ConfigService) => {
    //     return {
    //       autoSchemaFile: 'schema.gql',
    //       buildSchemaOptions: {
    //         fieldMiddleware: [loggerMiddleware],
    //       },
    //       sortSchema: true,
    //       debug: (config.get<string>('NODE_ENV') !== 'production') as boolean,
    //       uploads: false,
    //       path: '/graphql',
    //       introspection: config.get<boolean>('GRAPHQL_INTROSPECTION', false),
    //     } as GqlModuleOptions;
    //   },
    //   inject: [ConfigService],
    // })
  ]
})

export class GraphModule {
  constructor(private dataSource: DataSource) { }
}
