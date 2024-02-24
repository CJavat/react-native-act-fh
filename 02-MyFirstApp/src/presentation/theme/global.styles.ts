import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 80,
    color: "black",
    fontWeight: "300",
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});