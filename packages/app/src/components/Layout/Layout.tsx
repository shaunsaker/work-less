import React from 'react';
import { View, Types, ScrollView, Image } from 'reactxp';

import styles from './styles';

import HeaderBar from '../../components/HeaderBar';
import TitleText from '../../components/TitleText';
import ParagraphText from '../../components/ParagraphText';
import Button, { Props as ButtonProps } from '../../components/Button';
import FooterBar from '../../components/FooterBar';

export interface Props {
  titleText: string;
  titleHighlightText?: string;
  paragraphText?: string;
  imageSource: string;
  children?: Types.ReactNode;
  buttons?: ButtonProps[];
  alignCenter?: boolean;
}

const Layout: React.FC<Props> = ({
  titleText,
  titleHighlightText = '',
  paragraphText,
  imageSource,
  children,
  buttons,
  alignCenter,
}) => {
  const paragraphTextComponent = paragraphText ? (
    <View style={styles.paragraphTextContainer}>
      <ParagraphText>{paragraphText}</ParagraphText>
    </View>
  ) : null;

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={[styles.contentContainer, alignCenter ? styles.centeredContentContainer : {}]}>
          <View style={[styles.imageContainer, alignCenter ? styles.centeredImageContainer : {}]}>
            <Image source={imageSource} resizeMode="contain" style={styles.image} />
          </View>

          <View style={styles.textContainer}>
            <View style={styles.titleTextContainer}>
              <TitleText text={titleText} highlightText={titleHighlightText} />
            </View>

            {paragraphTextComponent}

            {children}

            <View style={styles.buttonsContainer}>
              {buttons &&
                buttons.map((item) => {
                  return (
                    <View key={item.text} style={styles.buttonContainer}>
                      <Button {...item} />
                    </View>
                  );
                })}
            </View>
          </View>
        </View>

        <FooterBar />
      </ScrollView>

      <View style={styles.headerBarContainer}>
        <HeaderBar />
      </View>
    </View>
  );
};

export default Layout;
