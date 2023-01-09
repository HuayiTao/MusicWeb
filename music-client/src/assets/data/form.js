// 匹配规则
const rules = {
  username: [
    { required: true, trigger: 'blur' }
  ],
  password: [
    { required: true, trigger: 'blur' }
  ],
  sex: [
    { required: true, message: 'Gender', trigger: 'change' }
  ],
  phoneNum: [
    { essage: 'Select Date', trigger: 'blur' }
  ],
  email: [
    { message: 'Please Enter Email', trigger: 'blur' },
    { type: 'email', message: 'Please Enter Valid Email！', trigger: ['blur', 'change'] }
  ],
  birth: [
    { required: true, message: 'Select Date', trigger: 'change' }
  ],
  introduction: [
    { message: 'Please enter description', trigger: 'blur' }
  ],
  location: [
    { message: 'Please enter the region', trigger: 'change' }
  ]
}

const cities = [{
  value: 'China',
  label: 'China'
}, {
  value: 'Hong Kong',
  label: 'Hong Kong'
}, {
  value: 'South Korea',
  label: 'South Korea'
}, {
  value: 'Japan',
  label: 'Japan'
}, {
  value: 'Taiwan',
  label: 'Taiwan'
}, {
  value: 'Malaysia',
  label: 'Malaysia'
}, {
  value: 'Singapore',
  label: 'Singapore'
}, {
  value: 'Thailand',
  label: 'Thailand'
}, {
  value: 'Myanmar',
  label: 'Myanmar'
}, {
  value: 'Vietnam',
  label: 'Vietnam'
}, {
  value: 'Laos',
  label: 'Laos'
}, {
  value: 'Cambodia',
  label: 'Cambodia'
}, {
  value: 'Australia',
  label: 'Australia'
}, {
  value: 'New Zealand',
  label: 'New Zealand'
}, {
  value: 'United States',
  label: 'United States'
}, {
  value: 'Canada',
  label: 'Canada'
}, {
  value: 'France',
  label: 'France'
}, {
  value: 'Germany',
  label: 'Germany'
}, {
  value: 'UK',
  label: 'UK'
}, {
  value: 'Austria',
  label: 'Austria'
}]

// 地区选择
// 
// const cities = [{
//   value: '北京',
//   label: '北京'
// }, {
//   value: '天津',
//   label: '天津'
// }, {
//   value: '河北',
//   label: '河北'
// }, {
//   value: '山西',
//   label: '山西'
// }, {
//   value: '内蒙古',
//   label: '内蒙古'
// }, {
//   value: '辽宁',
//   label: '辽宁'
// }, {
//   value: '吉林',
//   label: '吉林'
// }, {
//   value: '黑龙江',
//   label: '黑龙江'
// }, {
//   value: '上海',
//   label: '上海'
// }, {
//   value: '江苏',
//   label: '江苏'
// }, {
//   value: '浙江',
//   label: '浙江'
// }, {
//   value: '安徽',
//   label: '安徽'
// }, {
//   value: '福建',
//   label: '福建'
// }, {
//   value: '江西',
//   label: '江西'
// }, {
//   value: '山东',
//   label: '山东'
// }, {
//   value: '河南',
//   label: '河南'
// }, {
//   value: '湖北',
//   label: '湖北'
// }, {
//   value: '湖南',
//   label: '湖南'
// }, {
//   value: '广东',
//   label: '广东'
// }, {
//   value: '广西',
//   label: '广西'
// }, {
//   value: '海南',
//   label: '海南'
// }, {
//   value: '重庆',
//   label: '重庆'
// }, {
//   value: '四川',
//   label: '四川'
// }, {
//   value: '贵州',
//   label: '贵州'
// }, {
//   value: '云南',
//   label: '云南'
// }, {
//   value: '西藏',
//   label: '西藏'
// }, {
//   value: '陕西',
//   label: '陕西'
// }, {
//   value: '甘肃',
//   label: '甘肃'
// }, {
//   value: '青海',
//   label: '青海'
// }, {
//   value: '宁夏',
//   label: '宁夏'
// }, {
//   value: '新疆',
//   label: '新疆'
// }, {
//   value: '香港',
//   label: '香港'
// }, {
//   value: '澳门',
//   label: '澳门'
// }, {
//   value: '台湾',
//   label: '台湾'
// }]

export {
  rules,
  cities
}
