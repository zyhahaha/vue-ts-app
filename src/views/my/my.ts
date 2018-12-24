import { Component, Vue } from 'vue-property-decorator';
import TabBar from '@/components/tab_bar/tab_bar.vue';
import MyInfo from './components/my_info/my_info.vue';
import Content from './components/content/content.vue';

@Component({
  components: {
    TabBar,
    MyInfo,
    Content
  },
})
export default class My extends Vue {
  private created() {
    // alert(1234)
  }
}
