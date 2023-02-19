import 'styled-components';
import {primaryTheme} from "@app-theme";
type CustomTheme = typeof primaryTheme;

declare module "styled-components" {
    export interface DefaultTheme extends CustomTheme {}
}