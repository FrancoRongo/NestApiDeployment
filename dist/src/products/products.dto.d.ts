export declare class ProductDto {
    readonly name: string;
    readonly description: string;
    readonly price: number;
    readonly stock: number;
    readonly imgUrl: string;
    readonly category: string;
    constructor(partial: Partial<ProductDto>);
}
