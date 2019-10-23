import React from 'react';
import { View, Text } from 'reactxp';

import styles from './styles';
import SECTIONS from './sections';

interface Item {
  label: string;
  size: number;
  storyFn: Function;
}

const renderItem = ({ label, size, storyFn }: Item) => {
  const labelText = `${label}: ${size}px`;

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{labelText}</Text>
      </View>

      <View style={[styles.responsiveSectionContainer, { width: size }]}>{storyFn()}</View>
    </View>
  );
};

const withResponsiveViews = (storyFn: Function) => {
  return (
    <View style={styles.container}>
      <View style={styles.originalStoryContainer}>{storyFn()}</View>
      <View style={styles.responsiveSectionsContainer}>
        {SECTIONS.map((item) =>
          renderItem({
            ...item,
            storyFn,
          }),
        )}
      </View>
    </View>
  );
};

export default withResponsiveViews;
