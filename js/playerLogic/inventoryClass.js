export default class Inventory {
  inventory = [];
  constructor() {
    for (i = 0; i < 20; i++) {
      this.inventory.push(null);
    }
  }
  fetch() {
    return this.inventory;
  }
  clear() {
    for (i = 0; i < 20; i++) {
      this.inventory[i] = null;
    }
  }
  clearBackpack() {
    for (const slotId in SLOTS.BACKPACK) {
      this.inventory[slotId] = null;
    }
  }
}

export const SLOTS = Object.freeze({
    HEAD: 0,
    CHEST: 1,
    LEGGINGS: 2,
    BOOTS: 3,
    SHIELD: 4,
    HOTBAR: Object.freeze({
      ONE: 5,
      TWO: 6,
      THREE: 7,
      FOUR: 8,
      FIVE: 9,
      SIX: 10,
      ALL: 20
    }),
    BACKPACK: Object.freeze({
      ONE: 11,
      TWO: 12,
      THREE: 13,
      FOUR: 14,
      FIVE: 15,
      SIX: 16,
      SEVEN: 17,
      EIGHT: 18,
      NINE: 19,
      ALL: 21
    }),
    ALL: 22
});
