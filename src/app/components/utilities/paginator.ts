import { IPaginator } from './ipaginator';

export class Paginator<T> implements IPaginator {

    private _collection: Array<T> = [];
    //private _itemPerPage: number;
    selectedPage:number = 1;

    constructor(collection: Array<T>,public itemsPerPage: number) {
        this._collection = collection;
        //this._itemPerPage = itemsPerPage;
        }


    itemCount(): number {
        return this._collection.length;
    }
    pageCount(): number {
        return Math.ceil(this._collection.length/this.itemsPerPage);
    }
    pageItemCount(pageIndex: number): number {
        throw new Error('Method not implemented.');
    }
    pageIndex(itemIndex: number): number {
        throw new Error('Method not implemented.');
    }

    pageList(): number[]
    {                
        return Array(this.pageCount())
            .fill(0).map((x, i) => i + 1);
    }

}
