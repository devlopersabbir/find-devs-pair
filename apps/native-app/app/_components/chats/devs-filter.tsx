import React, { Dispatch, SetStateAction, useCallback, useRef } from "react";
import { Text, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export default function DevsFilter({ open, setOpen }: Props) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <GestureHandlerRootView>
      <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
        <BottomSheetView>
          <Text>Filter Chats</Text>
          <View>
            <Text>Active</Text>
            <Text>Unread</Text>
            <Text>All</Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
