import http from '@/http/http.ts';
import { Component, Vue } from 'vue-property-decorator';
import TabBar from '@/components/tab_bar/tab_bar.vue';
import ActivityItem from './components/activity_item/activity_item.vue';

@Component({
  components: {
    TabBar,
    ActivityItem,
  },
})
export default class Home extends Vue {
  public navList: object[] = [];
  public activityList: object[] = [];
  public created() {
    http.get('/homeNavData').then((res) => {
      this.navList = res.data.data.list;
    });
    http.get('/homeActivityDate').then((res) => {
      this.activityList = res.data.data.list;
    });
  }
}
