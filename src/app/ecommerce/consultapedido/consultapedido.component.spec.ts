import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultapedidoComponent } from './consultapedido.component';

describe('ConsultapedidoComponent', () => {
  let component: ConsultapedidoComponent;
  let fixture: ComponentFixture<ConsultapedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultapedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultapedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
