import { SupplierRepository } from "./supplier.repository";
import { SupplierDto } from "./supplier.dto";
import { Supplier } from "./supplier.entity";
export declare class SupplierServices {
    private readonly supplierRepository;
    constructor(supplierRepository: SupplierRepository);
    getSuppliers(): Promise<Supplier[]>;
    getSupplierId(id: string): Promise<Supplier>;
    createSupplier(supplierDto: SupplierDto): Promise<Supplier>;
    updateSupplier(id: string, updateSupplierdto: Partial<Supplier>): Promise<Supplier>;
    deteleSupplier(id: string): Promise<Supplier>;
}
