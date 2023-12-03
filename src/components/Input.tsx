'use client'

import React from 'react'
import InputBase, { InputBaseProps } from '@mui/material/InputBase'
import { Theme, styled } from '@mui/material'
import { MUIStyledCommonProps } from '@mui/system'

const MyInput = styled(InputBase)(({ theme }) => ({
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 2,
  paddingBottom: 2,
  outline: 'solid 1px #dddddd',
  color: 'white',
  borderRadius: 4,
  ':hover': {
    outlineColor: 'white',
  },
  ':focus-within': {
    outlineColor: 'white',
  },
}))

export default function Input(
  props: InputBaseProps & MUIStyledCommonProps<Theme>
) {
  return <MyInput {...props} />
}
