/**
 * Example service
 * Place your business logic here
 */

export class ExampleService {
  /**
   * Example method
   */
  async getData(): Promise<any> {
    // Your business logic here
    return {
      message: 'Hello from service',
    };
  }
}

export default new ExampleService();
