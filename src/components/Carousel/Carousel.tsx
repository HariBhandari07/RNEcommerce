import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { FavoriteIcon } from '../Icons/Icons';
import { theme } from '../../theme';
import React, { useState } from 'react';

export interface ICarouselProps {
  images: Array<string>;
  onAddToFavorite: () => void;
}

const { width } = Dimensions.get('window');

export function Carousel({ images, onAddToFavorite }: ICarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View
      style={{
        position: 'relative',
      }}>
      <TouchableOpacity style={styles.favoriteIcon} onPress={onAddToFavorite}>
        <FavoriteIcon />
      </TouchableOpacity>
      <FlatList
        nestedScrollEnabled
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex(+(x / width).toFixed(0));
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: width, height: 207 }} key={index.toString()}>
              <TouchableOpacity disabled>
                <Image
                  source={{ uri: item }}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View style={styles.pagination}>
        {images.map((item, index) => {
          return (
            <View
              key={index.toString()}
              style={[
                styles.paginationItem,
                {
                  backgroundColor:
                    currentIndex === index ? theme.darkYellow : theme.black20,
                },
              ]}></View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    width: 250,
    height: 250,
  },

  favoriteIcon: {
    backgroundColor: theme.white,
    width: 58,
    height: 58,
    borderRadius: 20,
    position: 'absolute',
    right: 30,
    top: 20,
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  paginationItem: {
    width: 20,
    height: 5,
    borderRadius: 3,
    marginLeft: 7,
  },
});
