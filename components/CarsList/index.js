import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import { styles } from './styles'
import cars from './cars'
import { CarItem } from '../CarItem'

export const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}