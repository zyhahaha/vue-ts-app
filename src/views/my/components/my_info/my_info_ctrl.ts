import { Component, Vue } from 'vue-property-decorator';

// api
import axios from 'axios';
// import {myInfoData} from '@/assets/api/api';

@Component
export default class MyInfo extends Vue {
  // private myInfoData: object = myInfoData;
  private infoData: object = {};

  private created(){
    axios.get('http://192.168.1.11:8088/myInfoData').then(res => {
      this.infoData = res.data.data.data;
    });
    // this.infoData = myInfoData.data;
  }
}
