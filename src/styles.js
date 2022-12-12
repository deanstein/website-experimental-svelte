import { css } from '@emotion/css';

/*** breakpoints and responsiveness ***/


/*** colors ***/
export const colors = {
	headerBackgroundColor : '#FAFAFA',
	headerNavItemBackgroundColor : 'darkGray',
	headerNavItemBackgroundColorHover : 'red'
};

export const headerClasses = {
	header : css`
	background-color: ${colors.headerBackgroundColor};
	`,
	headerLogo : css`
	height: 100%; /* fill the header with the logo top-to-bottom */
	`,
	headerNavContainer : css`
	height: 100%;
	display: flex;
	float: right;
	align-items: center;
`,
	headerNavItem : css`
	margin-left: 1rem;
	margin-right: 1rem;
	padding: 0.75rem;
	color: ${colors.headerBackgroundColor};
	background-color: ${colors.headerNavItemBackgroundColor};
	:hover {
		background-color: ${colors.headerNavItemBackgroundColorHover};
	}
`
}
