import { Component, Vue } from 'vue-property-decorator';
import TabBar from '@/components/tab_bar/tab_bar.vue';
import ActivityItem from './components/activity_item/activity_item.vue';

@Component({
  components: {
    TabBar,
    ActivityItem,
  },
})
export default class Home extends Vue {}
