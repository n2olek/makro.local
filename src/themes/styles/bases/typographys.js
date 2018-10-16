import {
  css
} from 'styled-components'
import {
  default as VARIABLES
} from './variables' // Use relative path for React Styleguidist

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Typographys:
//
// Using: ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_MN};
//
// * First regular (XXXXX Regular)
//   - FIRST_REGULAR_MN  (px)
//
// Notice: Color, Hover/Focus can set at Global or Scaffolding
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

// Text default style
// ============================================================
const TEXT_DEFAULT = css`
  font-weight: normal;
  vertical-align: middle;
  text-transform: none;
`

export default {
  FONT_STYLES: {
    // First regular
    // Thai
    // ============================================================

    // Huge
    // H1 : 48px
    // -------------------------------
    FONT_FIRST_REGULAR_HG: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.HG};
      line-height: ${VARIABLES.LINE_HEIGHTS.HG};
    `,

    // Second regular
    // Thai
    // ============================================================

    // Extra extra tiny
    // H3 :16px
    // -------------------------------
    FONT_SECOND_REGULAR_TTN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.TTN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TTN};
    `,

    // Tiny
    // H4 :14px
    // -------------------------------
    FONT_SECOND_REGULAR_TN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.TN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TN};
    `,

    // Mini
    // H5 :12px
    // -------------------------------
    FONT_SECOND_REGULAR_MN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.TN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TN};
    `,

    // Second Bold
    // Thai
    // ============================================================

    // Extra extra small
    // H2 :18px
    // -------------------------------
    FONT_SECOND_BOLD_XXS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.XXS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XXS};
    `,

    // Extra extra tiny
    // H3 :16px
    // -------------------------------
    FONT_SECOND_BOLD_TTN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.TTN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TTN};
    `,

    // Tiny
    // H4 :14px
    // -------------------------------
    FONT_SECOND_BOLD_TN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.TN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TN};
    `,

    // Mini
    // H5 :12px
    // -------------------------------
    FONT_SECOND_BOLD_MN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.TN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TN};
    `,

    // Second regular
    // Thai Title
    // ============================================================

    // Extra extra tiny
    // H4 :16px
    // -------------------------------
    FONT_SECOND_MEDIUM_TTN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.TTN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TTN};
    `,

    // Second medium
    // Thai Title
    // ============================================================

    // Huge
    // H1 : 24px
    // -------------------------------
    FONT_SECOND_REGULAR_HG: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.HG};
      line-height: ${VARIABLES.LINE_HEIGHTS.HG};
    `,

    // Extra small
    // H2 : 20px
    // -------------------------------
    FONT_SECOND_MEDIUM_XS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.XS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XS};
    `,

    // Extra extra small
    // H3 :18px
    // -------------------------------
    FONT_SECOND_MEDIUM_XXS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.XXS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XXS};
    `,
  }
}
