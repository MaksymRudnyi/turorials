import { observer } from 'mobx-react-lite';

import store from "../store";

export  const ChangeLoading = observer(() => {
  const { loading, changeLoading } = store.page;

  return (
    <button onClick={() => changeLoading(!loading)} >change</button>
  );
})
