import { IPaginator } from './ipaginator';

export class Paginator<T> implements IPaginator {

    private _collection: Array<T> = [];
    private _itemPerPage: number;

    constructor(collection: Array<T>, itemsPerPage: number) {
        this._collection = collection;
        this._itemPerPage = itemsPerPage;
    }


    itemCount(): number {
        return this._collection.length;
    }
    pageCount(): number {
        return Math.ceil(this._collection.length/this._itemPerPage);
    }
    pageItemCount(pageIndex: number): number {
        throw new Error('Method not implemented.');
    }
    pageIndex(itemIndex: number): number {
        throw new Error('Method not implemented.');
    }

}
