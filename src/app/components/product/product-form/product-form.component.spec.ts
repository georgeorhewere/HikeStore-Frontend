import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductFormComponent } from './product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFormComponent],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load form controls...', () => {
    const form = component.productForm;
    expect(form.valid).toEqual(false);
    // Name required
    expect(form.get('name')).toBeTruthy();
    expect(form.get('Unknown')).toBeFalsy();
    expect(form.get('description')).toBeTruthy();
    expect(form.get('category')).toBeTruthy();
    expect(form.get('quantity')).toBeTruthy();
    expect(form.get('color')).toBeTruthy();
    expect(form.get('')).toBeFalsy();
  });

  it('should validate form controls', () => {
    const form = component.productForm;
    expect(form.valid).toBeFalsy();

    form.get('name').setValue('Quebuec Trekkers');
    expect(form.get('name').valid).toBe(true);

    form.get('description').setValue('Hiking Pants');
    expect(form.get('description').valid).toBe(true);

    // category
    form.get('category').setValue('Hiking Pants');
    expect(form.get('category').valid).toBe(false);
    form.get('category').setValue(1);
    expect(form.get('category').valid).toBe(true);
    // price
    form.get('price').setValue('Hiking Pants');
    expect(form.get('price').valid).toBe(false);
    form.get('price').setValue(22.89);
    expect(form.get('price').valid).toBe(true);
    // Color
    form.get('color').setValue(654);
    expect(form.get('color').valid).toBe(false);
    form.get('color').setValue("red");
    expect(form.get('color').valid).toBe(true);
  });
  
it('should save form...', () => {
  const form = component.productForm;
  let product = component.product;  

  expect(product).toBeDefined();
  var testProduct = { productId:0, name:"Croc Shoes", price : 90, "category" : 3, "description":"samba sambe","quantity":5, "color":"red"};
  form.setValue(testProduct);
  expect(form.valid).toBe(true);
  component.submitForm();
  product = component.product;
  expect(product.name).toEqual(form.get('name').value);




});

  

});
