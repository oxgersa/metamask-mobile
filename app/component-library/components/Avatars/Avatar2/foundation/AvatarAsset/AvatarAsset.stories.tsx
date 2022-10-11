/* eslint-disable no-console, react-native/no-inline-styles */

// Third party dependencies.
import React from 'react';
import { storiesOf } from '@storybook/react-native';

// External dependencies.
import { AvatarAssetVariants } from './AvatarAsset.types';
import { AvatarSize } from '../../Avatar2.types';

// Internal dependencies.
import AvatarAsset from './AvatarAsset';

storiesOf('Component Library / AvatarAsset', module).add('Default', () => (
  <AvatarAsset
    variant={AvatarAssetVariants.Initial}
    initial="Brian"
    size={AvatarSize.Md}
  />
));