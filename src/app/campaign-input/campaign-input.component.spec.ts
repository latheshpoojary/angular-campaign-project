import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignInputComponent } from './campaign-input.component';

describe('CampaignInputComponent', () => {
  let component: CampaignInputComponent;
  let fixture: ComponentFixture<CampaignInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignInputComponent]
    });
    fixture = TestBed.createComponent(CampaignInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
