import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const statusCode = exception.getStatus();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errorResponse: any = exception.getResponse();
    const message = typeof errorResponse === "object" ? (typeof errorResponse.message === "object" ? errorResponse.message[0] : errorResponse.message) : exception.message;
    console.log("HttpExceptionFilter1", exception);
    console.log("HttpExceptionFilter:", errorResponse);
    console.log("HttpExceptionFilter3", statusCode);
    response.status(statusCode).json({
      statusCode,
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
