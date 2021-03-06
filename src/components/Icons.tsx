import * as React from 'react';

export interface IconProps
{
	className?: string;
	style?: React.CSSProperties;
	width?: number | string;
	height?: number | string;
	color?: 'green' | 'orange' | 'gray' | 'red';
}

const Icon = (Icon: React.ReactType): React.StatelessComponent<IconProps> => (
	{ className, width, height, color, style }: IconProps
): React.ReactElement<IconProps> =>
{
	const element = <Icon />;
	const props: any = {
		className: 'icon' + (className ? ` ${className}` : '')
	};
	if (width) props.width = typeof width === 'string' ? width : `${width}px`;
	if (height) props.height = typeof height === 'string' ? height : `${height}px`;
	if (color) props.className += ` ${color}`;
	if (style) props.style = { ...props.style, ...style };
	return React.cloneElement(element, {
		...element.props,
		...props
	});
};


export const IconDoctor = Icon(require('../images/icons/icon-doctor.svg'));
export const IconDonation = Icon(require('../images/icons/icon-donation.svg'));
export const IconFactory = Icon(require('../images/icons/icon-factory.svg'));
export const IconGift = Icon(require('../images/icons/icon-gift.svg'));
export const IconGuidebook = Icon(require('../images/icons/icon-guidebook.svg'));
export const IconHotel = Icon(require('../images/icons/icon-hotel.svg'));
export const IconLogo = Icon(require('../images/icons/logo.svg'));
export const IconLogoOrange = Icon(require('../images/icons/logo-orange.svg'));
export const IconLogoWhite = Icon(require('../images/icons/logo-white.svg'));
export const IconMainIcon = Icon(require('../images/icons/icon.svg'));
export const IconMainIconWhite = Icon(require('../images/icons/icon-white.svg'));
export const IconTopBanner = Icon(require('../images/icons/top-banner.svg'));
export const IconVerified = Icon(require('../images/icons/icon-verified.svg'));
export const IconUser = Icon(require('../images/icons/icon-user.svg'));
export const IconEdit = Icon(require('../images/icons/icon-edit.svg'));
export const IconLocation= Icon(require('../images/icons/icon-location.svg'));
export const IconPhone = Icon(require('../images/icons/icon-phone.svg'));
export const IconDelivery = Icon(require('../images/icons/icon-delivery.svg'));

export enum IconNames
{
	LOGO,
	LOGO_ORANGE,
	LOGO_WHITE,
	MAIN_ICON,
}

export const renderIcon = (name: IconNames, width: string, height: string, className?: string) =>
{
	switch (name)
	{
		case (IconNames.LOGO):
			return <IconLogo className={className} width={width} height={height} />;
		case (IconNames.LOGO_ORANGE):
			return <IconLogoOrange className={className} width={width} height={height} />;
		case (IconNames.LOGO_WHITE):
			return <IconLogoWhite className={className} width={width} height={height} />;
		case (IconNames.MAIN_ICON):
			return <IconMainIcon className={className} width={width} height={height} />;
	}
}