import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
} from "react-native";
import { images, icons, colors } from "../constants";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    user as userRepository
    , population as populationRepository
} from '../repositories'
import { convertDateTimeToString } from "../Utilies/DateTime";


const Profile = (props) => {

    const [user, setUser] = useState({})
    const [populations, setPopulations] = useState([])

    //get data from api when component render first time
    useEffect(() => {
        userRepository.getUserDetail().then((responseUser) => setUser(responseUser))
        populationRepository.getPopulation({
            drilldowns: 'Nation',
            measures: 'Population'
        }).then(responsePopulations => setPopulations(responsePopulations))
    }, [])

    const { email, dateOfBirth,
        gender, userId,
        address, username,
        url, phone, registeredDate } = user

    return <SafeAreaView className="flex-1 bg-[#333] pl-4 pt-12">
        <View>
            <Image
                style={{
                    width: 160,
                    height: 160,
                    resizeMode: 'cover',
                    borderRadius: 80,
                    alignSelf: 'center',
                    marginBottom: 20,
                }}
                source={{
                    uri: url
                }} />
            <View style={{ flexDirection: 'row' }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 15
                }}>Username:  </Text>
                <Text>{username}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Email:  </Text>
                <Text>{email}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>DOB:  </Text>
                <Text>{convertDateTimeToString(dateOfBirth)}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Gender:  </Text>
                <Text>{gender}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Address:  </Text>
                <Text>{address}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Phone:  </Text>
                <Text>{phone}</Text>
            </View>
        </View>
        <Text>{JSON.stringify(populations)}</Text>
    </SafeAreaView>
}

export default Profile