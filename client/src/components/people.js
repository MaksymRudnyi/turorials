import { observer } from 'mobx-react-lite';

import store from "../store";

export  const People = observer(() => {
  const { loading, persons } = store.person;

  if (loading) {
    return 'loading....';
  }

  return (
    <div>
      {persons.map((person )=> <div key={person.name}>{person.name}</div>)}
    </div>
  );
})
