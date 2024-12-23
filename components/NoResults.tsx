import images from '@/constants/images'
import { View, Text, Image } from 'react-native'

const NoResults = () => {
    return (
        <View className='flex items-center my-5'>
            <Image
                source={images.noResult}
                className='w-11/12 h-80'
                resizeMode='contain'
            />
            <Text className='text-2xl font-rubik-bold text-black-300 mt-5'>
                No Results!
            </Text>
            <Text className='text-base mt-2 text-black-00'>
                We couldn't find any results
            </Text>
        </View>
    )
}

export default NoResults