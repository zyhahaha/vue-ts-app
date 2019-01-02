import { Component, Vue } from 'vue-property-decorator';

// api
import http from '@/http/http.ts';
// import {myInfoData} from '@/assets/api/api';

@Component
export default class MyInfo extends Vue {
  // private myInfoData: object = myInfoData;
  private infoData: object = {};

  private created(){
    http.get('/myInfoData').then(res => {
      this.infoData = res.data.data.data;
    });
    // this.infoData = myInfoData.data;
  }
}
