import React from "react";
import Loading from "./Loading";
import RoomList from "./RoomList";
import RoomFilter from "./RoomFilter";
import { withRoomConsumer } from "../Context";

function RoomContainer({ context }) {
  const { loading, sortedData, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  console.log(sortedData);
  return (
    <>
      <RoomFilter rooms={sortedData} />
      <RoomList rooms={rooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);
