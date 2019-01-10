import http from '@/http/http.ts';
import { Component, Vue } from 'vue-property-decorator';
import TabBar from '@/components/tab_bar/tab_bar.vue';
import ActivityItem from './components/activity_item/activity_item.vue';

// api
// import axios from 'axios';
// import {homeNavData, homeActivityDate} from '@/assets/api/api';

@Component({
  components: {
    TabBar,
    ActivityItem,
  },
})
export default class Home extends Vue {
  // private homeNavData: object = homeNavData;
  // private homeActivityDate: object = homeActivityDate;
  private navList: object[] = [];
  private activityList: object[] = [];
  private created() {
    http.get('/homeNavData').then((res) => {
      this.navList = res.data.data.list;
    });
    http.get('/homeActivityDate').then((res) => {
      this.activityList = res.data.data.list;
    });
    // this.navList = homeNavData.list;
    // this.activityList = homeActivityDate.list;
  }
}
