import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookdetail } from './bookdetail';

describe('Bookdetail', () => {
  let component: Bookdetail;
  let fixture: ComponentFixture<Bookdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bookdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
