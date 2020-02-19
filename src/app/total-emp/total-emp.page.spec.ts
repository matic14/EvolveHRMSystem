import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TotalEmpPage } from './total-emp.page';

describe('TotalEmpPage', () => {
  let component: TotalEmpPage;
  let fixture: ComponentFixture<TotalEmpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalEmpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TotalEmpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
