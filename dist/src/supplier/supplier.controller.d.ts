import { Supplier } from "./supplier.entity";
import { SupplierServices } from "./supplier.services";
import { SupplierDto } from "./supplier.dto";
export declare class SupplierController {
    private readonly supplierServices;
    constructor(supplierServices: SupplierServices);
    getSuppliers(): Promise<Supplier[]>;
    getSupplierId(id: string): Promise<Supplier>;
    createSupplier(supplierDto: SupplierDto): Promise<Supplier>;
    updateSupplier(id: string, supplierDto: Partial<SupplierDto>): Promise<Supplier>;
    deleteSupplier(id: string): Promise<Supplier>;
}
