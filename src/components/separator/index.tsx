import { View } from "react-native";

type Props = {
  marginVertical: number;
};

export function Separator({ marginVertical }: Props) {
  return <View style={{ marginVertical }}></View>;
}
