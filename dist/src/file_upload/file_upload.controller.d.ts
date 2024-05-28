/// <reference types="multer" />
import { FileUploadService } from './file_upload.service';
export declare class FileUploadController {
    private readonly fileUploadServices;
    constructor(fileUploadServices: FileUploadService);
    uploadImage(productId: string, file: Express.Multer.File): Promise<import("../products/products.entity").Product>;
}
