import { Product } from './product';


describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product('Nike Air Max 2',12000,28)).toBeTruthy();
  });
it('shoud default category to one.', () => {
  expect(new Product('Nike Air Max 2',12000,28).category).toEqual(1);
});
});

describe('Create Product', () => {
  it('should set all values from constructor', () => {
    const product = new Product('Nike Air Max 2',12000,28);
    expect(product).toBeTruthy();
    expect(product).toBeDefined();
    expect(product.name).toContain('Nike Air Max 2');
    //expect(typeof(product)).t(typeof(Product));
    console.log(product);

  });
 });


