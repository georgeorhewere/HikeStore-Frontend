import { ProductFormGroup } from './productformgroup';
import { Product } from '../../models/product';

describe('ProductFormgroup', () => {
  const product = new Product();

  it('should create an instance', () => {
    expect(new ProductFormGroup(product)).toBeTruthy();
  });
});
