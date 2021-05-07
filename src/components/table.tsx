import { h, ref, reactive, onMounted } from 'vue';
import heroData from '../old-data2.json'
import { HereDTO, RACE_LIST, ROLE_LIST, Role } from './type';
import './table.styl'

let heroList = heroData as HereDTO[];
let hMap = new Map<string, number[]>();
heroList.forEach((v, listIndex) => {
  v.role.forEach(role => {
    v.race.forEach(race => {
      let key = race + role;
      let indexArr = hMap.get(key);
      if (indexArr){
        indexArr.push(listIndex);
      } else {
        hMap.set(key, [listIndex]);
      }
    })
  })
})

export default {
  setup(props, context) {
    function drawMark () {
      let canvas = document.getElementById('mark') as HTMLCanvasElement;
      let ctx = canvas.getContext('2d');
      ctx.translate(350, 350);
      let txt = '云川博客'
      ctx.save()
      ctx.font = "130px serif";
      ctx.strokeStyle = "#fee"
      let distence = 140
      for(let i = 0; i < 8; i++) {
        let ang = Math.PI * 1 / 4 ;
        ctx.rotate(ang);
        let text = txt[~~(i / 2)]
        if (i % 2 != 0) {
          ctx.strokeText(text, 0, distence);
        } else {
          ctx.strokeText(text, 0, distence * 2);
        }
      }
      ctx.restore();
    }

    onMounted(() => {
      drawMark()
    })
  },
  methods: {
    renderRow () {
      return RACE_LIST.map(v => {
        return <div class="row">
          <div class="row-name">{v}</div>
          { ROLE_LIST.map(role => {
            return this.renderCol(v, role)
          }) }
        </div>
      })
    },
    renderCol (race: string, role: string) {
      let itmeIndex = hMap.get(race + role)
      let items = itmeIndex ? itmeIndex.map(v => heroList[v]) : [];
      return (
        <div class="col">{
          items.map(h => {
          return <div class={['star-' + h.star, 'hero']}>{h.name}</div>
          })
        }</div>
      )
    }
  },
  render () {
    return (
      <div class="data-table">
        <div class="origin-mark">
          <canvas width="700" height="700" id="mark"></canvas>
          <p></p>
          <p></p>
        </div>
        <div class="row">
          <div class="row-name" style="font-size: 12px">constin
            <p>.com.cn/yd</p>
          </div>
          { ROLE_LIST.map(v => {
            return <div class="col">{v}</div>
          }) }
        </div>
        { this.renderRow() }
      </div>
    )
  }
}