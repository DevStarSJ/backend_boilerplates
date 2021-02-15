import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
 
@Injectable()
export class FilesService {
  private s3: any

  constructor() {
    this.s3 = new AWS.S3()

    if (process.env.AWS_ACCESS_KEY &&  process.env.AWS_SECRET_KEY && process.env.AWS_ACCESS_KEY.length > 0 && process.env.AWS_SECRET_KEY.length > 0) {
      AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
      })  
    }
  }
 
  async uploadPublicFile(dataBuffer: Buffer, category: string, filename: string) {
    const uploadResult = await this.s3.upload({
      Bucket: process.env.S3_BUCKET_NAME,
      Body: dataBuffer,
      Key: `boards/${category}/${filename}`,
      ACL: 'public-read',
    }).promise()
    
    return uploadResult.Location
  }
}