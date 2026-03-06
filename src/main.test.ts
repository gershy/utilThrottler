import { assertEqual } from '../build/utils.test.ts';
import Throttler from './main.ts';

// Type testing
(async () => {
  
  type Enforce<Provided, Expected extends Provided> = { provided: Provided, expected: Expected };
  
  type Tests = {
    1: Enforce<{ x: 'y' }, { x: 'y' }>,
  };
  
})();

// Test cases
(async () => {
  
  const cases = [
    
    {
      name: 'basic case',
      fn: async () => {
        
        const throttler = new Throttler(3);
        const result = await throttler.do(async () => 'hi');
        assertEqual(result, 'hi');
        
      }
    }
    
  ];
  for (const { name, fn } of cases) {
    
    try {
      
      await fn();
      
    } catch (err: any) {
      
      console.log(`FAILED: "${name}"`, err[limn]());
      process.exit(1);
      
    }
    
  }
  
  console.log(`Passed ${cases.length} test${cases.length === 1 ? '' : 's'}`);
  
})();