import {
  injectGlobal
} from 'styled-components'
import {
  TYPOGRAPHYS,
} from 'themes'
// import {
//   default as VARIABLES
// } from 'themes/styles/bases/variables'
// import {
//   default as TYPOGRAPHYS
// } from 'themes/styles/bases/typographys'
// import {
//   default as MIXINS
// } from 'themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from 'themes/styles/helpers/utilities'
// import {
//   CONTENTS,
//   ICONS,
//   LOGOS,
//   SHAREDS,
//   VIDEOS,
//   AUDIOS,
//   DOCUMENTS
// } from 'themes'

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Global
//
//
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

injectGlobal`
  body {
    ${TYPOGRAPHYS.FONT_STYLES.FONT_SECOND_MEDIUM_TTN};
  }
`;
