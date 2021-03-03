import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Switch } from 'react-native';
import api from '../service/api';

import styles from './styles';

export default function Json() {
    const [list, setList] = useState();

    useEffect(() => {
        api
        .get('1/comments').then((response) => {
            setList(response.data);
        })
    }, [])
    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        console.log('dentro da const', isEnabled);

        setIsEnabled(previousState => !previousState)
    };

    const Card = ({id, name, email, body}) => {
        return (
        <View style={isEnabled ? styles.ViewCardDark : styles.ViewCard}>
            <Text style={styles.titleText}>
                Nome:
                <Text style={styles.infoUser}>{name}</Text>
            </Text>
            <Text style={styles.titleText}>
                Email:
                <Text style={styles.infoUser}>{email}</Text>
            </Text>
            <Text style={isEnabled ? styles.commentTextDark : styles.commentText}>{body}</Text>
        </View>
        )
}
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>
                        Lista de comentários
                    </Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <FlatList 
                    data={list}
                    renderItem={({item, index}) => (
                        <>
                        <Card 
                            id={item.id}
                            name={item.name}
                            email={item.email}
                            body={item.body}
                            key={item.id}
                        />
                        </>
                    )}
                    extraData={(item, index) => String(index)}
                    />
            </View>
        </ScrollView>
    )
}