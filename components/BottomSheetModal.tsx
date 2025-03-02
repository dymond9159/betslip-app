import React, {
  forwardRef,
  useMemo,
  useImperativeHandle,
  useRef,
  ReactElement,
} from "react";
import { StyleSheet } from "react-native";
import {
  BottomSheetModal as BaseBottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetView,
  BottomSheetModalProps as BaseBottomSheetModalProps,
} from "@gorhom/bottom-sheet";

interface BottomSheetModalProps extends BaseBottomSheetModalProps {
  onOpen?: () => void;
  onClose?: () => void;
  children: ReactElement;
}

export const BottomSheetModal = forwardRef(
  ({ onOpen, onClose, children, ...props }: BottomSheetModalProps, ref) => {
    const bottomSheetRef = useRef<BaseBottomSheetModal>(null);

    useImperativeHandle(ref, () => ({
      present: () => {
        bottomSheetRef.current?.present();
        onOpen?.();
      },
    }));

    return (
      <BaseBottomSheetModal
        ref={bottomSheetRef}
        backdropComponent={(props) => <BottomSheetBackdrop {...props} />}
        backgroundStyle={{ backgroundColor: "#1B1E23" }}
        onDismiss={onClose}
        style={styles.container}
        {...props}
      >
        <BottomSheetView style={styles.sheetViewContent}>
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
    flex: 1,
    width: "100%",
  },
});
