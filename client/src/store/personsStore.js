import { makeAutoObservable } from 'mobx';
import axios from 'axios';

export default class PersonsStore {
  constructor(root) {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  loading = true;
  persons = []

  async load() {
    this.loading = true;
    const { data } = await axios.get('https://swapi.dev/api/people/');
    this.persons = data.results;

    this.loading = false;
  }
}
