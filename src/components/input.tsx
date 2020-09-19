import { reactive, onMounted } from 'vue'
import oldData from '../old-data.json';
import './input.styl'
import { HereDTO, Role, Race, ROLE_LIST, RACE_LIST } from './type';


function ListSelect (props, { emit }) {
    let options = props.type === 'role' ? ROLE_LIST : RACE_LIST;
    return (
        <select value={props.value} onChange={ (e:any) => { 
            emit('update', e.target.value)
         } }>
            {
                options.map(v => {
                    return <option value={v}>{v}</option>
                })
            }
        </select>
    )
}

export default {
    setup () {
        let heroList:HereDTO[] = reactive(oldData as HereDTO[] || [])

        function addRoleItem () {
            heroList.push({
                name: '',
                star: '',
                role: [],
                race: [],
                attack: '',
                firstMagic: '',
                maxMagic: '',
                dsc: ''
            });
        }
        onMounted(() => {
            if (!heroList.length)
            addRoleItem();
        })

        return {
            addRoleItem,
            heroList
        }
    },
    methods: {
        renderListItem (item: HereDTO, index: number) {
            const baseAttr = [
                'name','star','attack','firstMagic','maxMagic',
            ]
            return (
                <div class="hero-item">
                    {
                        baseAttr.map((attr, index) => {
                            return <div class="col">
                                <input
                                    type={ index ? 'number' : 'text' }
                                    value={item[attr]}
                                    onChange={ (val: any) => { item[attr] = val.target.value; }}
                                    />
                            </div>
                        })
                    }
                    <div class="col">
                        <ListSelect value={ item.race[0] } onUpdate={ (val) => { item.race.splice(0, 1, val) } } />
                    </div>
                    <div class="col">
                        <ListSelect value={ item.race[1] } onUpdate={ (val) => { item.race.splice(1, 1, val) } } />
                    </div>
                    <div class="col">
                        <ListSelect value={ item.role[0] } type="role" onUpdate={ (val) => { item.role.splice(0, 1, val) } } />
                    </div>
                    <div class="col">
                        <ListSelect value={ item.role[1] } type="role" onUpdate={ (val) => { item.role.splice(1, 1, val) } } />
                    </div>
                </div>
            )
        },
        renderList () {
            const attrs = ['名称', '星级', '攻击', '出场蓝量',  '最大蓝量', '职业一', '职业二', '特性一', '特性二' ];
            return (
                <div class="heroList">
                    <div class="hero-item th">
                        { attrs.map( v => {
                            return <div class="col">{ v }</div>
                        }) }
                    </div>
                    { this.heroList.map((v, i) => {
                        return this.renderListItem(v, i)
                    }) }
                </div>
            )
        },
        renderBtn () {
            return (
                <div class="add-btn-wrap">
                    <p>
                        <button class="add-btn" onClick={ this.addRoleItem  }>添加</button>
                    </p>
                    <p>
                        <button class="add-btn" onClick={ this.dataExport } >json</button>
                    </p>
                </div>
            )
        },
        dataExport () {
            console.log(JSON.stringify(this.heroList));
        }

    },
    
    render () {
        return <div class="input-box">
            { this.renderList() }
            { this.renderBtn() }
        </div>
    }
}