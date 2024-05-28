/// <reference types="multer" />
import { FileUploadRepository } from './file_upload.repository';
import { Product } from 'src/products/products.entity';
import { Repository } from 'typeorm';
export declare class FileUploadService {
    private readonly fileUploadRepository;
    private readonly productRepository;
    constructor(fileUploadRepository: FileUploadRepository, productRepository: Repository<Product>);
    uploadImage(file: Express.Multer.File, productId: string): Promise<Product>;
}
