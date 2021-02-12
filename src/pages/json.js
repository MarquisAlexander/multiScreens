import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../service/api';

export default function Json() {
    const [list, setList] = useState();

    useEffect(() => {
        api
        .get('1/comments').then((response) => {
            setList(response.data);
        })
    }, [])
    
    const styles = StyleSheet.create({
        ViewCard: {
            backgroundColor: '#7159f1',
            marginTop: 10,
        },
        TextCard: {
            fontSize: 14,
            color: '#fff',
        }
    });

    const Card = ({id, name1, email, body}) => {
        return (
        <View style={styles.ViewCard}>
            <Text>Email: {email}</Text>
            <Text>{body}</Text>
            <Text>Nome: {name1}</Text>
        </View>
        )
}
    
    return (
            <View>
                <Text>
                    Ola mundo
                </Text>
                <FlatList 
                    data={list}
                    renderItem={({item, index}) => (
                        <>
                        <Card 
                            id={item.id}
                            name1={item.name}
                            email={item.email}
                            body={item.body}
                            key={item.id}
                        />
                        </>
                    )}
                    extraData={(item, index) => String(index)}
                    />
            </View>
    )
}