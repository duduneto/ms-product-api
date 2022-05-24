import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createProduct(product: any) {
    console.log('service creating product => ', product);
  }
}
