import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';

export const loggerMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  console.log('okkkkkkkkkkkkkk i am the best');
  const value = await next();
  console.log(value);
  return value;
};