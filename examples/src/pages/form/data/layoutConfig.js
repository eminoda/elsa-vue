export const layout = [
  {
    elTag: 'el-row',
    elAttrs: {
      gutter: 10,
      type: 'flex',
      justify: 'start',
    },
    children: [
      { elTag: 'el-col', field: 'A', elAttrs: { span: 12 } },
      { elTag: 'el-col', field: 'B', elAttrs: { span: 12 } },
    ],
  },
  {
    elTag: 'el-row',
    elAttrs: {
      gutter: 10,
      type: 'flex',
      justify: 'start',
    },
    children: [
      { elTag: 'el-col', field: 'C', elAttrs: { span: 6 } },
      { elTag: 'el-col', field: 'D', elAttrs: { span: 8 } },
      { elTag: 'el-col', field: 'E', elAttrs: { span: 10 } },
    ],
  },
  {
    elTag: 'el-row',
    elAttrs: {
      type: 'flex',
      justify: 'end',
    },
    field: 'F',
  },
  { field: 'G' },
  { field: 'H' },
];
export const fields = {
  A: {
    label: 'A',
    elTag: 'el-input',
  },
  B: {
    label: 'B',
    elTag: 'el-input',
  },
  C: {
    label: 'C',
    elTag: 'el-input',
  },
  D: {
    label: 'D',
    elTag: 'el-input',
  },
  E: {
    label: 'E',
    elTag: 'el-input',
  },
  F: {
    label: 'F',
    elTag: 'el-input',
  },
  G: {
    label: 'G',
    elTag: 'el-input',
  },
  H: {
    label: 'H',
    elTag: 'el-input',
    elStyle: {
      width: '80%',
    },
  },
};
