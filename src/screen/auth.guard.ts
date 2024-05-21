import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private validateRequest(request: any): boolean {
    // Implement your validation logic here
    // For example, check for a specific header or token
    const token = request.headers.authorization;

    // Dummy validation logic: allow if token exists and equals 'valid-token'
    if (token && token === 'valid-token') {
      return true;
    }
    return false;
  }
}