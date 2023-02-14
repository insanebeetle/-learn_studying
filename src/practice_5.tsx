interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  claer() {}
}

const stringStorage = new LocalStorage<string>();
stringStorage.get("xx");
stringStorage.set("hello", "baaam");

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.get("call");
booleanStorage.set("hi", true);
