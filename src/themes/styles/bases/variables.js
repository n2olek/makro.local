// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Variables:
// * Font sizes
// * Line heights
// * Colors
// * Font families
//
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

// Factors (using in variables)
// ============================================================
const LINE_HEIGHT_FACTOR = '1.35'
const PRIME_FACTOR = '1px'

// Font sizes
const FONT_SIZES_MN   =  '11px'
const FONT_SIZES_TN   =  '13px'
const FONT_SIZES_TTN  =  '15px'
const FONT_SIZES_XXS  =  '17px'
const FONT_SIZES_XS   =  '19px'
const FONT_SIZES_SM   =  '23px'
const FONT_SIZES_MD   =  '29px'
const FONT_SIZES_LG   =  '31px'
const FONT_SIZES_XL   =  '37px'
const FONT_SIZES_XXL  =  '41px'
const FONT_SIZES_BG   =  '43px'
const FONT_SIZES_HG   =  '47px'
const FONT_SIZES_MS   =  '53px'

export default {
  // Font sizes
  // ..
  // Conventional size name:
  // ..
  // Mini(MN) < Tiny(TN) < Extra extra tiny(TTN)
  // Extra extra small(XXS) < Extra small(XS) < Small(SM) <
  // Medium(MD) < Large(LG) < Extra large(XL) < Extra extra large(XXL) <
  // Big(BG) < Huge(HG) < Massive(MS)
  // ============================================================
  FONT_SIZES: {
    MN:   `calc(${FONT_SIZES_MN}  + ${PRIME_FACTOR})`,  // 12px
    TN:   `calc(${FONT_SIZES_TN}  + ${PRIME_FACTOR})`,  // 14px //Alerts / Annotations
    TTN:  `calc(${FONT_SIZES_TTN} + ${PRIME_FACTOR})`,  // 16px //Paragraph / Body
    XXS:  `calc(${FONT_SIZES_XXS} + ${PRIME_FACTOR})`,  // 18px //Subheadline / Title bar
    XS:   `calc(${FONT_SIZES_XS}  + ${PRIME_FACTOR})`,  // 20px
    SM:   `calc(${FONT_SIZES_SM}  + ${PRIME_FACTOR})`,  // 24px //Depend
    MD:   `calc(${FONT_SIZES_MD}  + ${PRIME_FACTOR})`,  // 30px //Depend
    LG:   `calc(${FONT_SIZES_LG}  + ${PRIME_FACTOR})`,  // 32px //Main piont
    XL:   `calc(${FONT_SIZES_XL}  + ${PRIME_FACTOR})`,  // 38px
    XXL:  `calc(${FONT_SIZES_XXL} + ${PRIME_FACTOR})`,  // 42px
    BG:   `calc(${FONT_SIZES_BG}  + ${PRIME_FACTOR})`,  // 44px
    HG:   `calc(${FONT_SIZES_HG}  + ${PRIME_FACTOR})`,  // 48px
    MS:   `calc(${FONT_SIZES_MS}  + ${PRIME_FACTOR})`,  // 54px
  },

  // Line heights
  // ..
  // Conventional size name:
  // ..
  // Mini(MN) < Tiny(TN) <
  // Extra extra small(XXS) < Extra small(XS) < Small(SM) <
  // Medium(MD) < Large(LG) < Extra large(XL) < Extra extra large(XXL) <
  // Big(BG) < Huge(HG) < Massive(MS)
  // ============================================================
  LINE_HEIGHTS: {
    MN:   `calc((${FONT_SIZES_MN}  + ${PRIME_FACTOR})  * ${LINE_HEIGHT_FACTOR})`,  // 16.2px
    TN:   `calc((${FONT_SIZES_TN}  + ${PRIME_FACTOR})  * ${LINE_HEIGHT_FACTOR})`,  // 18.9px //Alerts / Annotations
    TTN:  `calc((${FONT_SIZES_TTN} + ${PRIME_FACTOR})  * ${LINE_HEIGHT_FACTOR})`,  // 21.6px //Paragraph / Body
    XXS:  `calc((${FONT_SIZES_XXS} + ${PRIME_FACTOR})  * ${LINE_HEIGHT_FACTOR})`,  // 24.3px //Subheadline / Title bar
    XS:   `calc((${FONT_SIZES_XS}  + ${PRIME_FACTOR})  * ${LINE_HEIGHT_FACTOR})`,  // 27px
    SM:   `calc((${FONT_SIZES_SM}  + ${PRIME_FACTOR})  * ${LINE_HEIGHT_FACTOR})`,  // 32.4px //Depend
    MD:   `calc((${FONT_SIZES_MD}  + ${PRIME_FACTOR})  * ${LINE_HEIGHT_FACTOR})`,  // 40.5px //Depend
    LG:   `calc((${FONT_SIZES_LG}  + ${PRIME_FACTOR})  * ${LINE_HEIGHT_FACTOR})`,  // 43.2px //Main piont
    XL:   `calc((${FONT_SIZES_XL}  + ${PRIME_FACTOR})  * ${LINE_HEIGHT_FACTOR})`,  // 51.3px
    XXL:  `calc((${FONT_SIZES_XXL} + ${PRIME_FACTOR})  * ${LINE_HEIGHT_FACTOR})`,  // 56.7px
    BG:   `calc((${FONT_SIZES_BG}  + ${PRIME_FACTOR})  * ${LINE_HEIGHT_FACTOR})`,  // 59.4px
    HG:   `calc((${FONT_SIZES_HG}  + ${PRIME_FACTOR})  * ${LINE_HEIGHT_FACTOR})`,  // 64.8px
    MS:   `calc((${FONT_SIZES_MS}  + ${PRIME_FACTOR})  * ${LINE_HEIGHT_FACTOR})`,  // 72.9px
  },

  // Colors
  // ..
  // Number is color intensity.
  // Little number is Lightness.
  // Big number is Darkness.
  // ============================================================
  COLORS: {
    // Base
    WHITE:    '#FFFFFF',  //Text Banner
    RED:      '#C01713',  //System
    BLUE:     '#006DC9',  //Link | System
    GREEN:    '#34BC73',  //System
    YELLOW:   '#FF8F00',  //Call To Action

    // Gray
    GRAY_1:   '#999999',  //Text Detail
    GRAY_2:   '#666666',  //Text Sub Head
    GRAY_3:   '#333333',  //Text Head

    // Blue
    BLUE_1:   '#4A94C9',  //Banner

    // Red
    RED_1:    '#DD4C4F',  //Banner

    // Green
    GREEN_1:  '#57ADB8',  //Banner

    // `calc(${LINE_HEIGHT_FACTOR} * ${FONT_SIZES_MN})`,   // 16px
  },

  // Font families
  // ..
  // Conventional Font family name:
  // ..
  // First, Second, Third, Fourth, Fifth, ...
  // ..
  // Not use Primary, Secondary, Tertiary, Quaternary, Quinary, ...
  // because long and difficult spelling.
  // ============================================================
  FONT_FAMILIES: {
    FIRST_REGULAR: 'Thonburi',
    FIRST_BOLD: 'Thonburi-Bold',
    SECOND_REGULAR: 'Prompt-Regular',
    SECOND_MEDIUM: 'Prompt-Medium',
    SECOND_BOLD: 'Prompt-Bold',
  },
}
