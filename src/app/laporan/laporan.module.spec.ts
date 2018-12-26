import { LaporanModule } from './laporan.module';

describe('LaporanModule', () => {
  let laporanModule: LaporanModule;

  beforeEach(() => {
    laporanModule = new LaporanModule();
  });

  it('should create an instance', () => {
    expect(laporanModule).toBeTruthy();
  });
});
