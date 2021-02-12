import React from 'react';
import { View } from 'react-native';
import { useSelector, Provider } from 'react-redux';

export default Box = () => {
    const darkModeContext = useSelector(({ darkModeContext }) => darkModeContext);

    const backgroundColor = darkModeContext === 'light' ? '#fff' : '#000';

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'pink' }}>
            <Provider darkModeContext>
                <View style={{ width: 50, height: 50, backgroundColor }} />
            </Provider>
        </View>
    );
};