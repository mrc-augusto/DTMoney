import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type Themetype = typeof defaultTheme

declare module 'sytled-components'{
  export interface DefaulTheme extends Themetype{}
}