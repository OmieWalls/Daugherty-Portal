import { MDCModule } from './mdc.module';

describe('MDCModule', () => {
  let mdcModule: MDCModule;

  beforeEach(() => {
    mdcModule = new MDCModule();
  });

  it('should create an instance', () => {
    expect(mdcModule).toBeTruthy();
  });
});
