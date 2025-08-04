import Enum from '../enum'

/**
 * 枚举类：订单类型
 * OrderTypeEnum
 */
export default new Enum([
  { key: 'PHYSICAL', name: '实物订单', value: 10 },
  { key: 'VIRTUAL', name: '虚拟订单', value: 20 }
])
