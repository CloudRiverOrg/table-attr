export type Role = '刺客'| '游侠'| '斗士'| '神盾战士'| '重骑兵'|
'法师'|'魔女'| '秘术师'| '大魔王'| '神王'| '驯龙大师'|
'征服者'| '复苏者'| '神谕者' | '骑士';
export type Race = '破败军团'| '黑夜使者'| '魔女'| '小恶魔'| '屠龙'|
'丧尸'| '圣光卫士'| '黎明使者'| '神佑之森'| '龙族'|
'铁甲卫士'| '永猎双子'| '复生亡魂';
export interface HereDTO {
    name: string,
    star: number | '',
    attack: number | '',
    firstMagic: number | '',
    maxMagic: number | '',
    role: Role[],
    race: Race[],
    dsc?: string
}
export const ROLE_LIST = [
    '刺客', '游侠', '斗士', '神盾战士', '重骑兵',
    '法师','魔女', '秘术师', '大魔王', '神王', '驯龙大师',
    '征服者', '复苏者', '神谕者' , '骑士']
export const RACE_LIST = [
    '破败军团', '黑夜使者', '魔女', '小恶魔', '屠龙',
    '丧尸', '圣光卫士', '黎明使者', '神佑之森', '龙族',
    '铁甲卫士', '永猎双子', '复生亡魂']