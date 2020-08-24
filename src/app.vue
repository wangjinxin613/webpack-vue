<template>
  <div class="text">
    <Test />
  </div>
</template>

<script lang="ts">
import './test.ts';
import Test from './components/test.vue';

import { Vue, Component } from 'vue-property-decorator';
@Component({
  filters: {
    toFixed: (num: number, fix = 2) => {
      return num.toFixed(fix);
    },
  },
  components: {
    Test
  }
})
export default class MyComponent extends Vue {
  public list: number[] = [0, 1, 2, 3, 4];
  get evenList() : unknown {
    return this.list.filter((item: number) => item % 2 === 0);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  set() : void {
    this.list.push(this.list.length);
  }
}

</script>

<style lang="less" scoped>
@text: yellow;
.text {
  color: @text;
}

.img {
  width: 500px;
  height: 500px;
  background: url("./assets/logo.jpg");
}
</style>