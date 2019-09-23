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
    expect(form.get('Name')).toBeTruthy();
    expect(form.get('Unknown')).toBeFalsy();
    expect(form.get('Description')).toBeTruthy();
    expect(form.get('Category')).toBeTruthy();
    expect(form.get('Quantity')).toBeTruthy();
    expect(form.get('Color')).toBeTruthy();
    expect(form.get('')).toBeFalsy();
  });

  it('should validate form controls', () => {
    const form = component.productForm;
    expect(form.valid).toBeFalsy();

    form.get('Name').setValue('Quebuec Trekkers');
    expect(form.get('Name').valid).toBe(true);

    form.get('Description').setValue('Hiking Pants');
    expect(form.get('Description').valid).toBe(true);

    // category
    form.get('Category').setValue('Hiking Pants');
    expect(form.get('Category').valid).toBe(false);
    form.get('Category').setValue(1);
    expect(form.get('Category').valid).toBe(true);
    // price
    form.get('Price').setValue('Hiking Pants');
    expect(form.get('Price').valid).toBe(false);
    form.get('Price').setValue(22.89);
    expect(form.get('Price').valid).toBe(true);
    // Color
    form.get('Color').setValue(654);
    expect(form.get('Color').valid).toBe(false);
    form.get('Color').setValue("red");
    expect(form.get('Color').valid).toBe(true);





  });



});
