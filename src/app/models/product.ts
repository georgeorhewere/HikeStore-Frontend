export class Product {

    constructor(
        public name: string,        
        public price: number,
        public quantity: number = 5,
        public category: number = 1,
        public description?: string,        
        public color?: string,
        public productId?: number) {

    }
}
