import {Component} from '@angular/core';

@Component({
  template: `
    <div>
      {{message}}
      {#for item of items; track item; let idx = $index, f = $first; let l = $last, ev = $even, o = $odd; let co = $count}
        Index: {{idx}}
        First: {{f}}
        Last: {{l}}
        Even: {{ev}}
        Odd: {{o}}
        Count: {{co}}
      {/for}
    </div>
  `,
})
export class MyApp {
  message = 'hello';
  items = [];
}
