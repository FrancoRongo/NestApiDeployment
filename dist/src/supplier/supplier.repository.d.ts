import { Repository } from "typeorm";
import { Supplier } from "./supplier.entity";
import { SupplierDto } from "./supplier.dto";
export declare class SupplierRepository {
    private readonly supplierRepository;
    constructor(supplierRepository: Repository<Supplier>);
    getSuppliers(): Promise<Supplier[]>;
    getSupplierById(id: string): Promise<Supplier>;
    createSupplier(supplierDto: SupplierDto): Promise<Supplier>;
    updateSupplier(id: string, updateSupplierDto: Partial<Supplier>): Promise<Supplier>;
    deleteSupplier(id: string): Promise<Supplier>;
}
