import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  ReactElement,
  useState,
} from "react";
import { StyleSheet, LayoutChangeEvent } from "react-native";
import {
  BottomSheetModal as BaseBottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useBetSlipTheme } from "@/hooks/useBetSlipTheme";

interface BottomSheetModalProps {
  onOpen?: () => void;
  onClose?: () => void;
  children: ReactElement;
}

export const BottomSheetModal = forwardRef(
  ({ onOpen, onClose, children, ...props }: BottomSheetModalProps, ref) => {
    const { theme } = useBetSlipTheme();

    const bottomSheetRef = useRef<BaseBottomSheetModal>(null);
    const [contentHeight, setContentHeight] = useState(300);

    const handleLayout = (event: LayoutChangeEvent) => {
      const { height } = event.nativeEvent.layout;
      setContentHeight(height);
    };

    useImperativeHandle(ref, () => ({
      present: () => {
        bottomSheetRef.current?.present();
        onOpen?.();
      },
      dismiss: () => {
        bottomSheetRef.current?.dismiss();
        onClose?.();
      },
    }));

    return (
      <BaseBottomSheetModal
        ref={bottomSheetRef}
        snapPoints={[Math.min(contentHeight, 850)]}
        backdropComponent={(props) => <BottomSheetBackdrop {...props} />}
        backgroundStyle={{ backgroundColor: "#1B1E23" }}
        handleIndicatorStyle={{
          width: 110,
          backgroundColor: theme.borderColor,
        }}
        onDismiss={onClose}
        style={styles.container}
        {...props}
      >
        <BottomSheetView
          style={styles.sheetViewContent}
          onLayout={handleLayout}
        >
          {children}
        </BottomSheetView>
      </BaseBottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  sheetViewContent: {
    width: "100%",
  },
});
