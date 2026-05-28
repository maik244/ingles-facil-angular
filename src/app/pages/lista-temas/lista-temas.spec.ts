import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTemas } from './lista-temas';

describe('ListaTemas', () => {
  let component: ListaTemas;
  let fixture: ComponentFixture<ListaTemas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTemas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTemas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
