import { Component, Vue } from 'vue-property-decorator';
import TabBar from '@/components/tab_bar/tab_bar.vue';
import ActivityItem from './components/activity_item/activity_item.vue';

// api
import {homeNavData, homeActivityDate} from '@/assets/api/api';

@Component({
  components: {
    TabBar,
    ActivityItem,
  },
})
export default class Home extends Vue {
  private homeNavData: object = homeNavData;
  private homeActivityDate: object = homeActivityDate;
  private navList!: Array<object>;
  private activityList!: Array<object>;
  private created(){
    this.navList = homeNavData.list;
    this.activityList = homeActivityDate.list;
  }
}
