import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpMonthlyAttPage } from './emp-monthly-att.page';

describe('EmpMonthlyAttPage', () => {
  let component: EmpMonthlyAttPage;
  let fixture: ComponentFixture<EmpMonthlyAttPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpMonthlyAttPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpMonthlyAttPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
