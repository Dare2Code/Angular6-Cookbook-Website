export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementInactiveToActive() {
    this.activeToInactiveCounter ++;
    console.log('Active to Inactive Count: ' + this.activeToInactiveCounter);
  }

  incrementActiveToInactive() {
    this.inactiveToActiveCounter ++;
    console.log('Inactive to Active Count: ' + this.inactiveToActiveCounter);
  }
}
