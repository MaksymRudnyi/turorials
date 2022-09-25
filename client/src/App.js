import { observer } from 'mobx-react-lite';
import './App.css';
import store from "./store";
import { ChangeLoading } from './components/changeLoading';
import { useEffect } from "react";
import { People } from './components/people';

export  const App = observer(() => {
  const { loading } = store.page;
  const { load } = store;

  useEffect(() => {
    load();
  }, [load])

  return (
    <div className="App">
      Loading: {loading.toString()}
      <hr/>

      <ChangeLoading/>

      <hr/>

      <People/>
    </div>
  );
})
