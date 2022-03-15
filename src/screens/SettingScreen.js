import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect} from 'react';

import {AuthContext} from '../navigation/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ColorNeutral100,
  ColorNeutral200,
  ColorNeutral500,
  ColorNeutral900,
  ColorSecondary500,
} from '../utils/Colours';
import {AvatarLarge} from '../utils/Avatars';
import {RoundedCornerCardLarge} from '../utils/RoundedCorners';
import {IconSmall} from '../utils/Icons';

import ImageAvatar from '../assets/img/image-avatar.png';

import IconPlus from '../assets/svg/icon-plus.svg';
import IconArrowRight from '../assets/svg/icon-arrow-right.svg';
import IconAvatarDefault from '../assets/svg/icon-avatar-default.svg';
import IconInfo from '../assets/svg/icon-info.svg';
import IconPower from '../assets/svg/icon-power.svg';
import IconWallet from '../assets/svg/icon-wallet.svg';
import {Body1Regular, Body1SemiBold, Body2Regular} from '../utils/Bodys';
import {TouchableRipple} from 'react-native-paper';
import {Heading3SemiBold} from '../utils/Headings';

const SettingScreen = () => {
  const {userId, setUserId} = useContext(AuthContext);

  const DisplayUserId = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userId');
      jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserId(jsonValue.replace('"', '').replace('"', ''));
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    DisplayUserId();
  }, []);

  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView>
        <View style={{marginHorizontal: 16}}>
          <View
            style={{
              marginVertical: 20,
              backgroundColor: ColorNeutral100,
              padding: 10,
              flexDirection: 'row',
            }}>
            <View style={{width: 41, height: 45}}>
              <View
                style={{
                  width: AvatarLarge,
                  height: AvatarLarge,
                  // backgroundColor: ColorNeutral500,
                  overflow: 'hidden',
                  ...RoundedCornerCardLarge,
                }}>
                <Image
                  source={ImageAvatar}
                  style={{height: '100%', width: '100%'}}
                />
              </View>
              <TouchableOpacity
                style={{
                  width: IconSmall,
                  height: IconSmall,
                  backgroundColor: ColorSecondary500,
                  position: 'absolute',
                  right: 0,
                  bottom: 3,
                  overflow: 'hidden',
                  borderRadius: 4,
                }}>
                <IconPlus width={IconSmall} height={IconSmall} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginLeft: 10,
                justifyContent: 'space-around',
                paddingVertical: 6,
              }}>
              <Text style={{...Body1SemiBold, color: ColorNeutral900}}>
                Metatrave
              </Text>
              <Text style={{...Body2Regular, color: ColorNeutral900}}>
                Masuk Dengan Google
              </Text>
            </View>
          </View>
          <Text style={{...Heading3SemiBold, color: ColorNeutral900}}>
            Saldo
          </Text>
          <View style={{marginVertical: 10}}>
            <View style={{backgroundColor: ColorNeutral100}}>
              <TouchableRipple
                style={{padding: 10, width: '100%'}}
                onPress={() => null}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        width: IconSmall,
                        height: IconSmall,
                        // backgroundColor: ColorNeutral200,
                        borderRadius: 2,
                        marginRight: 10,
                      }}>
                      <IconWallet width={IconSmall} height={IconSmall} />
                    </View>
                    <Text style={{...Body1Regular, color: ColorNeutral900}}>
                      Rp 5.000.000
                    </Text>
                  </View>
                  <IconArrowRight width={IconSmall} height={IconSmall} />
                </View>
              </TouchableRipple>
            </View>
          </View>
          <Text style={{...Heading3SemiBold, color: ColorNeutral900}}>
            Pengaturan & Keamanan
          </Text>
          <View
            style={{
              marginTop: 10,
              borderBottomWidth: 1,
              borderColor: ColorNeutral200,
            }}>
            <View style={{backgroundColor: ColorNeutral100}}>
              <TouchableRipple
                style={{padding: 10, width: '100%'}}
                onPress={() => null}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        width: IconSmall,
                        height: IconSmall,
                        // backgroundColor: ColorNeutral200,
                        borderRadius: 2,
                        marginRight: 10,
                      }}>
                      <IconAvatarDefault width={IconSmall} height={IconSmall} />
                    </View>
                    <Text style={{...Body1Regular, color: ColorNeutral900}}>
                      Edit Profile
                    </Text>
                  </View>
                  <IconArrowRight width={IconSmall} height={IconSmall} />
                </View>
              </TouchableRipple>
            </View>
          </View>
          <View style={{marginBottom: 10}}>
            <View style={{backgroundColor: ColorNeutral100}}>
              <TouchableRipple
                style={{padding: 10, width: '100%'}}
                onPress={() => null}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        width: IconSmall,
                        height: IconSmall,
                        // backgroundColor: ColorNeutral200,
                        borderRadius: 2,
                        marginRight: 10,
                      }}>
                      <IconInfo width={IconSmall} height={IconSmall} />
                    </View>
                    <Text style={{...Body1Regular, color: ColorNeutral900}}>
                      Informasi Akun
                    </Text>
                  </View>
                  <IconArrowRight width={IconSmall} height={IconSmall} />
                </View>
              </TouchableRipple>
            </View>
          </View>
          <Text style={{...Heading3SemiBold, color: ColorNeutral900}}>
            Pilihan
          </Text>
          <View
            style={{
              marginTop: 10,
              borderBottomWidth: 1,
              borderColor: ColorNeutral200,
            }}>
            <View style={{backgroundColor: ColorNeutral100}}>
              <TouchableRipple
                style={{padding: 10, width: '100%'}}
                onPress={() => null}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{...Body1Regular, color: ColorNeutral900}}>
                    Versi App
                  </Text>
                  <Text style={{...Body1Regular, color: ColorNeutral900}}>
                    1.21.0
                  </Text>
                </View>
              </TouchableRipple>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: ColorNeutral200,
            }}>
            <View style={{backgroundColor: ColorNeutral100}}>
              <TouchableRipple
                style={{padding: 10, width: '100%'}}
                onPress={() => null}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{...Body1Regular, color: ColorNeutral900}}>
                    Syarat & Ketentuan
                  </Text>
                  <IconArrowRight width={IconSmall} height={IconSmall} />
                </View>
              </TouchableRipple>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: ColorNeutral200,
            }}>
            <View style={{backgroundColor: ColorNeutral100}}>
              <TouchableRipple
                style={{padding: 10, width: '100%'}}
                onPress={() => null}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{...Body1Regular, color: ColorNeutral900}}>
                    Kebijakan Privasi
                  </Text>
                  <IconArrowRight width={IconSmall} height={IconSmall} />
                </View>
              </TouchableRipple>
            </View>
          </View>
          <View
            style={{
              marginBottom: 10,
              borderBottomWidth: 1,
              borderColor: ColorNeutral200,
            }}>
            <View style={{backgroundColor: ColorNeutral100}}>
              <TouchableRipple
                style={{padding: 10, width: '100%'}}
                onPress={() => null}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{...Body1Regular, color: ColorNeutral900}}>
                    Tentang Kita
                  </Text>
                  <IconArrowRight width={IconSmall} height={IconSmall} />
                </View>
              </TouchableRipple>
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <View style={{backgroundColor: ColorNeutral100}}>
              <TouchableRipple
                style={{padding: 10, width: '100%'}}
                onPress={() => logout()}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        width: IconSmall,
                        height: IconSmall,
                        // backgroundColor: ColorNeutral200,
                        borderRadius: 2,
                        marginRight: 10,
                      }}>
                      <IconPower width={IconSmall} height={IconSmall} />
                    </View>
                    <Text style={{...Body1Regular, color: ColorNeutral900}}>
                      Keluar
                    </Text>
                  </View>
                  <IconArrowRight width={IconSmall} height={IconSmall} />
                </View>
              </TouchableRipple>
            </View>
          </View>
          {/* <Text style={{marginBottom: 20}}>User Id : {userId}</Text>
          <Button title="Logout" onPress={() => logout()} /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
