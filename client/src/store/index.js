import PageStore from "./pageStore";
import PersonsStore from "./personsStore";
import { makeAutoObservable, runInAction } from 'mobx';

export class RootScore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  page = new PageStore();
  person = new PersonsStore();

  async load() {
    await Promise.all([
      this.person.load()
    ])
  }
}

export default new RootScore();