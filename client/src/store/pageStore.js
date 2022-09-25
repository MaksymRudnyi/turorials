import { makeAutoObservable, runInAction } from 'mobx';

export default class PageStore {
  constructor(root) {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  loading = true;

  changeLoading(loading) {
    this.loading = loading
  }
}
