export declare class ProductDto {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    readonly imgUrl: string;
    readonly category: string;
    readonly supplier: string;
    readonly supplierPrice: number;
    constructor(partial: Partial<ProductDto>);
}
