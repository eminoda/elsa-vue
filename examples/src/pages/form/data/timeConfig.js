import moment from 'moment'

export const layout = [
  { field: 'birthday' },
  { field: 'getupTime' },
  { field: 'trainingDateRange' },
  {
    elTag: 'el-row',
    elAttrs: {
      gutter: 10,
      type: 'flex',
      justify: 'start'
    },
    children: [
      { elTag: 'el-col', field: 'workStartTime', elAttrs: { span: 12 } },
      { elTag: 'el-col', field: 'workEndTime', elAttrs: { span: 12 } }
    ]
  }
]
export const fields = {
  birthday: {
    label: '出生日期',
    elTag: 'el-date-picker',
    elAttrs: {}
  },
  getupTime: {
    label: '起床时刻',
    elTag: 'el-time-picker',
    elAttrs: {
      valueFormat: 'HH:mm:ss'
    }
  },
  trainingDateRange: {
    label: '培训经历',
    elTag: 'el-date-picker',
    elAttrs: {
      format: 'yyyy-MM-dd',
      valueFormat: 'yyyy-MM-dd',
      type: 'datetimerange',
      rangeSeparator: '至',
      startPlaceholder: '开始日期',
      endPlaceholder: '结束日期'
    }
  },
  workStartTime: {
    label: '工作起始时间',
    elTag: 'el-date-picker',
    elAttrs: {
      format: 'yyyy-MM-dd',
      valueFormat: 'yyyy-MM-dd',
      pickerOptions: {
        disabledDate(value, { model }) {
          if (model.workEndTime) {
            return moment(value).format('YYYY-MM-DD') < model.workEndTime ? false : true
          } else {
            return false
          }
        }
      }
    }
  },
  workEndTime: {
    label: '工作结束时间',
    elTag: 'el-date-picker',
    elAttrs: {
      format: 'yyyy-MM-dd',
      valueFormat: 'yyyy-MM-dd',
      pickerOptions: {
        disabledDate(value, { model }) {
          if (model.workStartTime) {
            return moment(value).format('YYYY-MM-DD') > model.workStartTime ? false : true
          } else {
            return false
          }
        }
      }
    }
  }
}
