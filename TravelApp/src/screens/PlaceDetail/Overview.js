import React, { Component } from 'react';
import {
    StyleSheet, View, Image, TouchableOpacity,
} from 'react-native';
import {
    Text, H2, Button, H3, ListItem, Left, Icon, Body, Right, Toast, List, Spinner, Root
} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import Swiper from 'react-native-swiper';

import { AirbnbRating } from 'react-native-ratings';
import { ScrollView } from 'react-native-gesture-handler';
import ViewMoreText from 'react-native-view-more-text';
import { DEVICE_WIDTH, HORIZONTAL_MARGIN } from '../../constants/Layout';
import { places } from '../../../data/CityDetail.Data';
import PlaceCard from '../../components/PlaceCard';
import { bitexcoAbout } from '../../../data/PlaceDetail.Data';
import { A4RATIO } from '../../constants/Ratios';
import MyText from '../../components/MyText';
import { MAIN_COLOR } from '../../constants/Colors';

const bitexcoOverview = require('../../assets/images/bitexcoOverview.jpg');

const imgWidth = DEVICE_WIDTH;

export default class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = { mounting: true };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ mounting: false }), 200);
    }

    renderPlacesCard = ({ item }) => (
        <PlaceCard
          item={item}
          style={{ marginRight: 25 }}
        />
    );

    render() {
        const {
            titleArea, openArea
        } = styles;
        const { onTouchCarouselStart, onTouchCarouselEnd } = this.props;
        return (
            this.state.mounting
            ? (
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <Spinner color="red" />
                </View>
            )
            : (
            <Root>
            <ScrollView>
                <Swiper
                  autoplay
                  showsPagination
                  autoplayDirection
                  width={imgWidth}
                  height={imgWidth / A4RATIO}
                  style={{ marginBottom: 15 }}
                >
                    <Image
                      source={bitexcoOverview}
                      style={{ width: imgWidth, height: imgWidth / A4RATIO }}
                    />
                    <Image
                      source={bitexcoOverview}
                      style={{ width: imgWidth, height: imgWidth / A4RATIO }}
                    />
                    <Image
                      source={bitexcoOverview}
                      style={{ width: imgWidth, height: imgWidth / A4RATIO }}
                    />
                    <Image
                      source={bitexcoOverview}
                      style={{ width: imgWidth, height: imgWidth / A4RATIO }}
                    />
                </Swiper>
                <View style={{ marginHorizontal: HORIZONTAL_MARGIN }}>
                    <H2>Bitexco Financial Tower - Saigon Skydeck</H2>
                    <View style={titleArea}>
                        <AirbnbRating
                          showRating={false}
                          ratingCount={5}
                          isDisabled
                          size={15}
                          defaultRating={4}
                          //   ratingColor="#3498db"
                          //   ratingBackgroundColor="#c8c7c8"
                        />
                        <Text note style={{ marginLeft: 10 }}>5,056 reviews</Text>
                    </View>
                    <Text style={{ fontSize: 13 }}>
                        #15 of 198 things to do in Ho Chi Minh City
                    </Text>
                    {/* <Text>Observation Decks & Towers</Text> */}
                </View>
                <TouchableOpacity style={openArea}>
                    <Button success transparent>
                        <Text style={{ fontWeight: '400' }}>OPEN NOW</Text>
                    </Button>
                    <Text style={{ textAlign: 'center', flex: 1 }}>9:30 AM - 9:30 PM</Text>
                </TouchableOpacity>
                {/* About */}
                <View style={{ marginHorizontal: HORIZONTAL_MARGIN }}>
                    <H3>About</H3>
                    <ViewMoreText
                      numberOfLines={5}
                      renderViewMore={this.renderViewMore}
                      renderViewLess={this.renderViewLess}
                      textStyle={{ textAlign: 'left' }}
                    >
                        {bitexcoAbout}
                    </ViewMoreText>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon style={{ color: MAIN_COLOR }} type="MaterialCommunityIcons" name="clock" />
                            </Left>
                            <Body>
                                <Text style={{ fontSize: 13 }}>Suggested duration: 1-2 hours</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon style={{ color: MAIN_COLOR }} name="ticket" type="FontAwesome" />
                            </Left>
                            <Body>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 13 }}>Admission ticket: $9.00</Text>
                                </TouchableOpacity>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon style={{ color: MAIN_COLOR }} type="Entypo" name="location-pin" />
                            </Left>
                            <Body>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 13 }}>
                                        36 Ho Tung Mau Street, Ben Nghe ward, District 1, HCMC 70000 Vietnam
                                    </Text>
                                </TouchableOpacity>
                            </Body>
                            <Right>
                                <Icon type="Entypo" name="chevron-right" />
                            </Right>
                        </ListItem>
                        {/* <ListItem>
                            <MapView />
                        </ListItem> */}
                        <ListItem icon>
                            <Left>
                                <Icon style={{ color: MAIN_COLOR }} type="Entypo" name="phone" />
                            </Left>
                            <Body>
                                <TouchableOpacity
                                  onPress={() => Toast.show({
                                    text: 'Calling...',
                                    duration: 2000
                                })}
                                >
                                    <Text style={{ fontSize: 13 }}>+84 93 843 93 27</Text>
                                </TouchableOpacity>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon style={{ color: MAIN_COLOR }} fontSize={50} type="MaterialCommunityIcons" name="email-outline" />
                            </Left>
                            <Body>
                                <Text style={{ fontSize: 13 }}>Email</Text>
                            </Body>
                            <Right>
                                <Icon type="Entypo" name="chevron-right" />
                            </Right>
                        </ListItem>
                    </List>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <MyText type="black" style={{ marginLeft: HORIZONTAL_MARGIN, fontSize: 25 }}>Related Places</MyText>
                    <Carousel
                      data={places}
                      renderItem={this.renderPlacesCard}
                      sliderWidth={DEVICE_WIDTH}
                      itemWidth={DEVICE_WIDTH * 0.75}
                      onTouchStart={onTouchCarouselStart}
                      onTouchEnd={onTouchCarouselEnd}
                    />
                </View>
            </ScrollView>
            </Root>
        ));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    titleArea: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginVertical: 5
    },
    openArea: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'lightgray',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginVertical: 20,
        marginHorizontal: HORIZONTAL_MARGIN
    }
});
