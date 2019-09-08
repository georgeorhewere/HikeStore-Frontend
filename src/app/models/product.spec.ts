import { Product } from './product';


describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product()).toBeTruthy();
  });
it('shoud default category to one.', () => {
  expect(new Product().category).toEqual(1);
});
});

describe('Create Product', () => {
  it('should set all values from constructor', () => {
    const product = new Product(1,'Nike Air Max 2', 'Nike durable hike boots', 1, 25000.00, 300);
    expect(product).toBeTruthy();
    expect(product).toBeDefined();
    expect(product.name).toContain('Nike Air Max 2');
    //expect(typeof(product)).t(typeof(Product));
    console.log(product);

  });
 });


