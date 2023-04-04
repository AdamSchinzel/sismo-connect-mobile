import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ZkConnectClientConfig } from "@sismo-core/zk-connect-client";
import { Icon, Select, View, useToast } from "native-base";
import React, { useEffect, useState } from "react";

import { TOAST_DURATION } from "../../config/constants";
import { useGroupsQuery } from "../../graphql";
import { useZkConnect } from "../../hooks/useZkConnect";
import { RootStackParamList } from "../../screens/RootStackParams";
import Button from "../elements/Button";
import Heading from "../modules/Heading";

type SecretMessageProp = StackNavigationProp<RootStackParamList, "Home">;

const Home = () => {
  const navigation = useNavigation<SecretMessageProp>();

  const [groupId, setGroupId] = useState<string>("");

  const toast = useToast();

  const groups = useGroupsQuery();
  const groupsData = groups.data?.groups;

  const config: ZkConnectClientConfig = {
    appId: "0xa4bd963b0de72eb2f23207d8ed9f6e88",
  };

  const { zkConnect, response, setResponse } = useZkConnect({ config });

  const handleProve = () => {
    if (!groupId) {
      toast.show({
        title: "Select some data group",
        duration: TOAST_DURATION,
      });
    } else {
      zkConnect.request({ claimRequest: { groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a" } });
    }
  };

  useEffect(() => {
    if (!response) return;

    navigation.navigate("SecretMessage");
    setResponse(null);
  }, [response]);

  return (
    <View>
      <Heading
        title="Welcome to zkConnect 👋"
        subtitle="Prove with zkConnect that you are member of some group to view the secret message."
      />
      <View mt={10} mx={10}>
        <Select
          size="lg"
          flex={1}
          color="white"
          selectedValue={groupId}
          placeholder="Select data group"
          onValueChange={(id: string) => setGroupId(id)}
          py={4}
          dropdownIcon={<Icon m="2" mr="3" size="6" color="gray.400" name="chevron-down-outline" as={Ionicons} />}
          _selectedItem={{
            bg: "gray.200",
            endIcon: <Icon as={Ionicons} name="checkmark-outline" size="6" />,
          }}>
          {groups.loading ? (
            <Select.Item label="Loading" value="Loading" isDisabled />
          ) : groupsData?.length === 0 ? (
            <Select.Item label="No groups" value="No groups" isDisabled />
          ) : (
            groupsData?.map((option, i) => (
              <Select.Item
                key={i}
                label={`${option?.name} (${option?.latestSnapshot.size} eligible users)`}
                value={option?.id ?? ""}
              />
            ))
          )}
        </Select>
        <Button text="Prove" onPress={() => handleProve()} />
      </View>
    </View>
  );
};

export default Home;
