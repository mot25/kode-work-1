import React, { ErrorInfo, PropsWithChildren, ReactNode } from 'react';
import { Text } from 'react-native';


interface IGetDSFEType {
    hasError: boolean
}
export class ErrorBoundary extends React.Component {
    state: IGetDSFEType
    _props?: PropsWithChildren
    constructor(props: PropsWithChildren) {
        super(props)
        this._props = props
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(): IGetDSFEType {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <Text>Something went wrong.</Text>
        }
        return this?._props?.children
    }
}