import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RokFormWorkspaceVolumeComponent } from './rok-form-workspace-volume.component';

describe('RokFormWorkspaceVolumeComponent', () => {
  let component: RokFormWorkspaceVolumeComponent;
  let fixture: ComponentFixture<RokFormWorkspaceVolumeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RokFormWorkspaceVolumeComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RokFormWorkspaceVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
