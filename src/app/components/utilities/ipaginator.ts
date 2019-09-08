export interface IPaginator {
    itemCount(): number;
    pageCount (): number;
    pageItemCount (pageIndex: number): number;
    pageIndex(itemIndex: number): number;
}

