import { Component, Vue } from 'vue-property-decorator';
import TabBar from '@/components/tab_bar/tab_bar.vue'; // @ is an alias to /src

@Component({
  components: {
    TabBar,
  },
})
export default class My extends Vue {}
