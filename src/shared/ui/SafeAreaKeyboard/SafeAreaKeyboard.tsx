import React, { PropsWithChildren } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';


const SafeAreaKeyboard = ({ children }: PropsWithChildren) =>
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}
        style={{ flex: 1 }}
    >
        {children}
    </KeyboardAvoidingView>

export default SafeAreaKeyboard