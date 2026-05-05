class ParkingLot {
  constructor(size) {
    this.size = size;
    this.bitMap = BigInt(0);
    this.fullMask = (1n << BigInt(size)) - 1n;
  }

  isOccupied(spotIndex) {
    // so here consider parking lot of size 4
    // and and 0 and 1 index is occupied 0011
    // now you looking for 3rd index occupied ??
    // 1n << BigInt(3) = 0100
    // 0011 & 0100 = 0000
    // so 0n !== 0n is false
    // so 3rd index is not occupied
    const mask = 1n << BigInt(spotIndex);
    return (this.bitMap & mask) !== 0n;
  }

  park(spotIndex) {
    if (spotIndex >= this.size) {
      return "Invalid Spot";
    }

    if (this.isOccupied(spotIndex)) {
      return "Spot is already occupied";
    }

    this.bitMap |= 1n << BigInt(spotIndex);
    return `Car parked in spot ${spotIndex}`;
  }

  findAvailableSpot() {
    const freeBits = this.fullMask & ~this.bitMap;
    if (freeBits === 0n) {
      return -1;
    }

    const rightmostBit = freeBits & -freeBits;
    return Number(rightmostBit).toString(2).length - 1;
  }

  vacate(spotIndex) {
    if (spotIndex < 0 || spotIndex >= this.size) {
      return "Invalid Spot";
    }

    if (!this.isOccupied(spotIndex)) {
      return "Spot is already empty";
    }

    this.bitMap &= ~(1n << BigInt(spotIndex));
    return `Car vacated from spot ${spotIndex}`;
  }
}

function parkCar(lot) {
  if (lot.isFull()) {
    console.log("Lot is full");
    return;
  }

  const spot = lot.findAvailableSpot();
  lot.park(spot);
  console.log(`Car parked in spot ${spot}`);
}
