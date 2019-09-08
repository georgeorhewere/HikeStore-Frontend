export class Product {

    constructor(public productId?: number,
        public name?: string,
        public description?: string,
        public category: number = 1,
        public price?: number,
        public quantity?: number) {

    }
}
