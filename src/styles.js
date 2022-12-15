import { css } from '@emotion/css';

/*** breakpoints and responsiveness ***/
export const breakpoints = {
	height : {
		breakpoint0 : '400px',
		breakpoint1 : '800px',
	},
	width : {
		breakpoint0 : '800px',
		breakpoint1 : '1200px'
	}
}

/*** general sizes ***/
export const sizes = {
	headerMaxHeight0 : '20vh',
	headerMaxHeight1 : '10vh',
	headerMaxHeight2 : '5vh'
}

/*** colors ***/
export const colors = {
	headerBackgroundColor : '#FAFAFA',
	headerNavItemBackgroundColor : 'darkGray',
	headerNavItemBackgroundColorHover : 'red',
	test: 'red'
};

/*** UI elements ***/
const myCss = css({
	color: 'blue',
  })
  
export const headerClasses = {
	header : css`
	@media (max-height: ${breakpoints.height.breakpoint0}) {
		height: ${sizes.headerMaxHeight0};
		padding: 5vh;
		}
	@media (min-height: ${breakpoints.height.breakpoint0}) and (max-height: ${breakpoints.height.breakpoint1}) {
		height: ${sizes.headerMaxHeight1};
		padding: 2vh;
		}
	@media (min-height: ${breakpoints.height.breakpoint1}) {
		height: ${sizes.headerMaxHeight2};
		padding: 2vh;
		}
	`,
	headerLogo : css`
	height: 100%; /* fill the header with the logo top-to-bottom */
	`,
	headerNavContainer : css`
	/* responsive behavior - by width */
	@media (max-width: ${breakpoints.width.breakpoint0}) {
		display: block;
	  }
	  @media (min-width: ${breakpoints.width.breakpoint0}) and (max-height: ${breakpoints.width.breakpoint1}) {
		display: flex;
	  }
	  
	  @media (min-width: ${breakpoints.width.breakpoint1}) {
		  display: flex;
	  }

	height: ${breakpoints.height.breakpoint0} / 2;
	display: flex;
	float: right;
	align-items: center;
`,
	headerNavItem : css`
	display: flex;
	align-items: center;
	margin-left: 1rem;
	margin-right: 1rem;
	padding-left: 1rem;
	padding-right: 1rem;
	height: 50%;
	color: ${colors.headerBackgroundColor};
	background-color: ${colors.headerNavItemBackgroundColor};
	:hover {
		background-color: ${colors.headerNavItemBackgroundColorHover};
	}
`
}
