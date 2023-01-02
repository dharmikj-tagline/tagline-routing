import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFindComponent } from './data-find.component';

describe('DataFindComponent', () => {
  let component: DataFindComponent;
  let fixture: ComponentFixture<DataFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
