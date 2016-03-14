import test from 'ava';
import 'babel-core/register';
import energyUsage from 'web/static/js/reducers/energy_usage_2010'

test('default changes nothing', t => {
  let originalState = 'foo';
  let newState = energyUsage(originalState, { "type": "notDefined"})
  t.same(newState, originalState);
});
