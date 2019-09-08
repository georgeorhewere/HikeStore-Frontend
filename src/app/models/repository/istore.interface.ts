export interface IStoreInterface <T> {

    load(): void;
    list(): T[];
    get(id: number): T;
    add(instance: T): number;
    update(instance: T): void;
    delete(id: number): boolean;
    

}
