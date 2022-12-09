import { css } from '@emotion/css';

/*** breakpoints and responsiveness ***/


/*** colors ***/
export const colors = {
	headerBackgroundColor : '#FAFAFA',
	headerNavItemBackgroundColor : 'darkGray'
};

export const headerClasses = {
	headerNavContainer : css`
	background-color: ${colors.headerNavItemBackgroundColor};
	height: 100%;
	display: flex;
	float: right;
	align-items: center;
`,
	headerNavItem : css`
	padding: 1rem;
	color: ${colors.headerBackgroundColor};
`
}
