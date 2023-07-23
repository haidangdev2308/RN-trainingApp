import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    SafeAreaView,
    ScrollView,
    Switch
} from 'react-native'
import { images, colors, icons } from '../constants'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faGlobe,
    faChevronRight,
    faCloud,
    faPhone,
    faEnvelope,
    faSignOut,
    faLock,
    faFingerprint,
    faDoorClosed,
    faFileAlt,
    faPassport
} from '@fortawesome/free-solid-svg-icons';
import UiHeader from '../components/UiHeader';

const Settings = () => {

    const [isEnableLockApp, setEnableLockApp] = useState(true)
    const [isEnableChangePassword, setEnableChangePassword] = useState(true)
    const [isEnableUseFinger, setEnableUseFinger] = useState(true)

    return (
        <SafeAreaView className="flex-1 bg-white">
            <UiHeader title='Settings' />
            <ScrollView>
                <View style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    height: 45,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: colors.primaryColor,
                        fontWeight: 500,
                        marginLeft: 10
                    }}>Common</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    height: 40,
                    padding: 10
                }}>
                    <FontAwesomeIcon icon={faGlobe} size={22} />
                    <Text style={{
                        color: 'black',
                        fontWeight: 500,
                        marginLeft: 10,
                        flex: 1
                    }}>Language</Text>
                    <Text style={{
                        color: 'rgba(0,0,0,0.5)',
                        fontWeight: 500,
                        marginRight: 10
                    }}>English</Text>
                    <FontAwesomeIcon icon={faChevronRight} size={22} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    height: 40,
                    padding: 10
                }}>
                    <FontAwesomeIcon icon={faCloud} size={22} />
                    <Text style={{
                        color: 'black',
                        fontWeight: 500,
                        marginLeft: 10,
                        flex: 1
                    }}>Environment</Text>
                    <Text style={{
                        color: 'rgba(0,0,0,0.5)',
                        fontWeight: 500,
                        marginRight: 10
                    }}>Production</Text>
                    <FontAwesomeIcon icon={faChevronRight} size={22} />
                </View>

                <View style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    height: 45,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: colors.primaryColor,
                        fontWeight: 500,
                        marginLeft: 10
                    }}>Account</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    height: 40,
                    padding: 10
                }}>
                    <FontAwesomeIcon icon={faPhone} size={22} />
                    <Text style={{
                        color: 'black',
                        fontWeight: 500,
                        marginLeft: 10,
                        flex: 1
                    }}>Phone</Text>
                    <FontAwesomeIcon icon={faChevronRight} size={22} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    height: 40,
                    padding: 10
                }}>
                    <FontAwesomeIcon icon={faEnvelope} size={22} />
                    <Text style={{
                        color: 'black',
                        fontWeight: 500,
                        marginLeft: 10,
                        flex: 1
                    }}>E-Mail</Text>
                    <FontAwesomeIcon icon={faChevronRight} size={22} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    height: 40,
                    padding: 10
                }}>
                    <FontAwesomeIcon icon={faSignOut} size={22} />
                    <Text style={{
                        color: 'black',
                        fontWeight: 500,
                        marginLeft: 10,
                        flex: 1
                    }}>Sign out</Text>
                    <FontAwesomeIcon icon={faChevronRight} size={22} />
                </View>

                <View style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    height: 45,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: colors.primaryColor,
                        fontWeight: 500,
                        marginLeft: 10
                    }}>Security</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    height: 40,
                    padding: 10
                }}>
                    <FontAwesomeIcon icon={faLock} size={22} />
                    <Text style={{
                        color: 'black',
                        fontWeight: 500,
                        marginLeft: 10,
                        flex: 1
                    }}>Lock app in background</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnableLockApp ? colors.primaryColor : '#f4f3f4'}
                        onValueChange={() => {
                            setEnableLockApp(!isEnableLockApp)
                        }}
                        value={isEnableLockApp}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    height: 40,
                    padding: 10
                }}>
                    <FontAwesomeIcon icon={faDoorClosed} size={22} />
                    <Text style={{
                        color: 'black',
                        fontWeight: 500,
                        marginLeft: 10,
                        flex: 1
                    }}>Lock app in background</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnableChangePassword ? colors.primaryColor : '#f4f3f4'}
                        onValueChange={() => {
                            setEnableChangePassword(!isEnableChangePassword)
                        }}
                        value={isEnableChangePassword}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    height: 40,
                    padding: 10
                }}>
                    <FontAwesomeIcon icon={faFingerprint} size={22} />
                    <Text style={{
                        color: 'black',
                        fontWeight: 500,
                        marginLeft: 10,
                        flex: 1
                    }}>Use FingerPrint</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnableUseFinger ? colors.primaryColor : '#f4f3f4'}
                        onValueChange={() => {
                            setEnableUseFinger(!isEnableUseFinger)
                        }}
                        value={isEnableUseFinger}
                    />
                </View>

                <View style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    height: 45,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: colors.primaryColor,
                        fontWeight: 500,
                        marginLeft: 10
                    }}>Misc</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    height: 40,
                    padding: 10
                }}>
                    <FontAwesomeIcon icon={faFileAlt} size={22} />
                    <Text style={{
                        color: 'black',
                        fontWeight: 500,
                        marginLeft: 10,
                        flex: 1
                    }}>Term of Service</Text>
                    <FontAwesomeIcon icon={faChevronRight} size={22} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    height: 40,
                    padding: 10
                }}>
                    <FontAwesomeIcon icon={faPassport} size={22} />
                    <Text style={{
                        color: 'black',
                        fontWeight: 500,
                        marginLeft: 10,
                        flex: 1
                    }}>Open Source Licenses</Text>
                    <FontAwesomeIcon icon={faChevronRight} size={22} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Settings