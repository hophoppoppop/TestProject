import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native';
import KeyboardAvoidingComponentStyle from './KeyboardAvoidingComponent.style';

interface RootContainerProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function KeyboardAvoidingComponent(
  props: RootContainerProps,
): React.JSX.Element {
  const {children, style} = props;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[KeyboardAvoidingComponentStyle.container, style]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={KeyboardAvoidingComponentStyle.contentContainer}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default KeyboardAvoidingComponent;
