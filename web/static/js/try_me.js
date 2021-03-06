import { createStore } from 'redux'
import reducer from './reducers/index'
// import { fetch } from 'node-fetch'

console.log('reducer', reducer);

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

let run = () => {
  fetch('https://data.cityofchicago.org/resource/energy-usage-2010.json?community_area_name=Woodlawn',
      {
        headers: {
          'X-App-Token': 'jTHI0uCmG4rSLLTawUBvoznNt'
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log("json", json);
      });



  let store = createStore(counter);

  store.subscribe(() => {
    console.log(store.getState())
  });

  store.dispatch({
    type: 'INCREMENT'
  });
  store.dispatch({
    type: 'INCREMENT'
  });
  store.dispatch({
    type: 'DECREMENT'
  });

  console.log('store', store);

  console.log('done running')
}

export { run };