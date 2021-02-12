import React from 'react';
import {LineChart, Grid, YAxis, XAxis} from 'react-native-svg-charts';
import {SafeAreaView, View} from 'react-native';

export default function Linha() {
    const data = [80,90,45,23,124,65,23,-12,50];

    return (
        <SafeAreaView>
            <YAxis
                data={data}
                style={{marginBottom: 30}}
                contentInset={{top: 10, bottom: 10}}
            />
            <View style={{flex: 1}}>
                <LineChart
                    style={{height: 300}}
                    data={data}
                    svg={{stroke: '#7159c1'}}
                    contentInset={{top: 20, bottom: 20}}>
                        <Grid />
                </LineChart>
                <XAxis
                    style={{marginHorizontal: -10, height: 30}}
                    data={data}
                    formatLabel={(value, index) => index}
                    contentInset={{top: 10, bottom: 10}}
                />
            </View>

        </SafeAreaView>
    )
}