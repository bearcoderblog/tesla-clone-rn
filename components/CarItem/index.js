import React from 'react'
import { View, Text, ImageBackground} from 'react-native'
import { styles } from './styles'
import { StyledButton } from '../StyledButton'

export const CarItem = (props) => {

    const { name, tagline, image, taglineCTA } = props.car;

    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}{' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton type="primary" content="Custom Order" onPress={() => console.log('Cons')} />
                <StyledButton type="secondary " content="Existing Inventory" onPress={() => console.log('Cons')} />
            </View>
      </View>
    )
}