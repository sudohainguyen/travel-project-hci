import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import MyText from './MyText';
import { hotDest } from '../constants/Images';
import { DEVICE_WIDTH } from '../constants/Layout';
import { A4RATIO } from '../constants/Ratios';

const HotDest = (props) => {
    const { item, style, onPress } = props;
    const { dest, img } = item;
    return (
        <TouchableOpacity
          style={[
                style,
                {
                    width: DEVICE_WIDTH * 0.3,
                    aspectRatio: 1 / A4RATIO
                }
            ]}
          onPress={onPress}
        >
            <ImageBackground
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              source={hotDest[img]}
            >
                <MyText
                  type="black"
                  style={{
                    fontSize: 20,
                    color: 'white'
                }}
                >
                    {dest}
                </MyText>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default HotDest;
