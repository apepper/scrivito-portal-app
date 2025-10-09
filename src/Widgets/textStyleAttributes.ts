export const textStyleAttributes = {
  fontSize: 'string',
  letterSpacing: 'string',
  lineHeight: 'string',
  color: 'string',
  textTransform: [
    'enum',
    { values: ['none', 'uppercase', 'lowercase', 'capitalize'] },
  ],
} as const
