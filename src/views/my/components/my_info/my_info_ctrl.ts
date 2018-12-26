import { Component, Vue } from 'vue-property-decorator';

// api
import {myInfoData} from '@/assets/api/api';

@Component
export default class MyInfo extends Vue {
  private myInfoData: object = myInfoData;
  private infoData!: object;

  private created(){
    this.infoData = myInfoData.data;
  }
}
