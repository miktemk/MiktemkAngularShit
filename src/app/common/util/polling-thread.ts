export class PollingThread {
  private pollingTimer: any = null;

  constructor(
    private callback: () => void,
    private delayMs: number
  ) {}
  
  start() {
    this.pollingTimer = setInterval(() => {
      this.callback();
    }, this.delayMs);
  }
  stop() {
    if (!this.pollingTimer)
      return;
    clearInterval(this.pollingTimer);
    this.pollingTimer = null;
  }
}