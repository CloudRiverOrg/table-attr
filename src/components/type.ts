export type Role = '决斗大师' | '魔法师' | '宗师' | '神射手' | '耀光使' | '斗士' | '刺客' | '猎人' | '秘术师' | '神盾使' | '重装战士' | '夜影' | '枭雄';
export type Race = '猩红之月' | '天神' | '夜幽莲华' | '明昼莲华' | '忍者' | '浪人' | '玉剑仙' | '永恒之森' | '三国猛将' | '福星' | '月神' | '霸王' | '天煞';
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
    '决斗大师', '魔法师', '宗师', '神射手', '耀光使', '斗士', '刺客',
     '猎人', '秘术师', '神盾使', '重装战士', '夜影', '枭雄']
export const RACE_LIST = [
    '猩红之月', '天神', '夜幽莲华', '明昼莲华', '忍者',
    '浪人', '玉剑仙', '永恒之森', '三国猛将', '福星',
    '月神', '霸王', '天煞']