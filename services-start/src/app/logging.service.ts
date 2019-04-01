export class LoggingService {
  logStatusChange(status: string) {
    console.log('A service status has changed, new status: ' + status);
  }
}