export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.tron.log(state + ' ' + action);
  }
}
