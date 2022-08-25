// eslint-disable-next-line no-restricted-imports
import {Tag as BlueprintTag} from '@blueprintjs/core';
import * as React from 'react';

import {BaseTag} from './BaseTag';
import {Colors} from './Colors';
import {IconName, Icon} from './Icon';
import {Spinner} from './Spinner';

const intentToFillColor = (intent: React.ComponentProps<typeof BlueprintTag>['intent']) => {
  switch (intent) {
    case 'primary':
      return Colors.Blue50;
    case 'danger':
      return Colors.Red50;
    case 'success':
      return Colors.Green50;
    case 'warning':
      return Colors.Yellow50;
    case 'none':
    default:
      return Colors.Gray100;
  }
};

const intentToTextColor = (intent: React.ComponentProps<typeof BlueprintTag>['intent']) => {
  switch (intent) {
    case 'primary':
      return Colors.Blue700;
    case 'danger':
      return Colors.Red700;
    case 'success':
      return Colors.Green700;
    case 'warning':
      return Colors.Yellow700;
    case 'none':
    default:
      return Colors.Gray900;
  }
};

const intentToIconColor = (intent: React.ComponentProps<typeof BlueprintTag>['intent']) => {
  switch (intent) {
    case 'primary':
      return Colors.Blue500;
    case 'danger':
      return Colors.Red500;
    case 'success':
      return Colors.Green500;
    case 'warning':
      return Colors.Yellow500;
    case 'none':
    default:
      return Colors.Gray900;
  }
};

interface Props extends Omit<React.ComponentProps<typeof BlueprintTag>, 'icon' | 'rightIcon'> {
  icon?: IconName | 'spinner';
  rightIcon?: IconName | 'spinner';
}

const IconOrSpinner: React.FC<{icon: IconName | 'spinner' | null; color: string}> = React.memo(
  ({icon, color}) => {
    if (icon === 'spinner') {
      return <Spinner fillColor={color} purpose="body-text" />;
    }
    return icon ? <Icon name={icon} color={color} /> : null;
  },
);

export const Tag: React.FC<Props> = (props) => {
  const {children, icon = null, rightIcon = null, intent, ...rest} = props;

  const fillColor = intentToFillColor(intent);
  const textColor = intentToTextColor(intent);
  const iconColor = intentToIconColor(intent);

  return (
    <BaseTag
      {...rest}
      fillColor={fillColor}
      textColor={textColor}
      icon={<IconOrSpinner icon={icon} color={iconColor} />}
      rightIcon={<IconOrSpinner icon={rightIcon} color={iconColor} />}
      label={children}
    />
  );
};
