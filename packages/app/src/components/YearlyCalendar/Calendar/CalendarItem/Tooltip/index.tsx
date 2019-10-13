import React, { useRef } from 'react';
import { Popup, Button, Types } from 'reactxp';

import Tooltip from './Tooltip';

interface Props {
  id?: string;
  text: string;
  children: React.ReactElement;
}

interface PopupOptions {
  getAnchor: () => React.Component<any, any>;
  renderPopup: (
    anchorPosition: Types.PopupPosition,
    anchorOffset: number,
    popupWidth: number,
    popupHeight: number,
  ) => Types.ReactNode;
  positionPriorities: Types.PopupPosition[];
  onDismiss: () => void;
}

/*
 * TODO: If children is a button, use that hover start and end
 * TODO: Animation
 */
const TooltipContainer: React.FC<Props> = ({ id, text, children }: Props) => {
  const ref = useRef<any>(null); // FIXME:
  const popupId = id || text;
  const bottom = 'bottom' as const;
  const top = 'top' as const;
  const right = 'right' as const;
  const left = 'left' as const;
  const positionPriorities = [bottom, top, right, left];
  const popupDelay = 0;
  const getAnchor = () => ref.current;
  const renderPopup = () => {
    return <Tooltip text={text} />;
  };
  const showPopup = () => {
    const popupOptions: PopupOptions = {
      getAnchor,
      renderPopup,
      positionPriorities,
      onDismiss: () => {},
    };
    Popup.show(popupOptions, popupId, popupDelay);
  };
  const dismissPopup = () => {
    Popup.dismiss(popupId);
  };
  const onPress = () => {
    if (!Popup.isDisplayed()) {
      showPopup();
    }
  };
  const onFocus = () => {
    showPopup();
  };
  const onBlur = () => {
    dismissPopup();
  };
  const onHoverStart = () => {
    showPopup();
  };
  const onHoverEnd = () => {
    dismissPopup();
  };

  return (
    <Button
      ref={ref}
      onPress={onPress}
      onFocus={onFocus}
      onBlur={onBlur}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      style={{ padding: 0 }} // remove base styles
    >
      {children}
    </Button>
  );
};

export default TooltipContainer;
