import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NumberAuthPage } from './number-auth.page';

describe('NumberAuthPage', () => {
  let component: NumberAuthPage;
  let fixture: ComponentFixture<NumberAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberAuthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NumberAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
