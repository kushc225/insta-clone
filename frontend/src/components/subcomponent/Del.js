import React from "react";
import Del1 from "./Del1";
const data = {
  success: true,
  data: [
    [
      {
        _id: "635b5452fa520e9204d9712d",
        owner: "631ef29812fb17f352cc3170",
        ownerName: "kush",
        imgURL: "KUSH",
        caption: "hello this is in my testing phase",
        tagPeople: [],
        likes: [],
        viewer: [],
        DMY: "28/10/2022",
        HMS: "09/32/26",
        createdAt: "2022-10-28T04:02:26.948Z",
        updatedAt: "2022-10-28T04:02:26.948Z",
        __v: 0,
      },
      {
        _id: "635b5452fa520e9204d9712d",
        owner: "631ef29812fb17f352cc3170",
        ownerName: "kush",
        imgURL: "KUSH",
        caption: "hello this is in my testing phase",
        tagPeople: [],
        likes: [],
        viewer: [],
        DMY: "28/10/2022",
        HMS: "09/32/26",
        createdAt: "2022-10-28T04:02:26.948Z",
        updatedAt: "2022-10-28T04:02:26.948Z",
        __v: 0,
      },
    ],
    [
      {
        _id: "635b55978ddf2bcf26beb0ef",
        owner: "631f6947298b00eccefeffd0",
        ownerName: "rohit",
        imgURL: "ROHIT",
        caption: "second story by rohit ",
        tagPeople: [],
        likes: [],
        viewer: [],
        DMY: "28/10/2022",
        HMS: "09/37/51",
        createdAt: "2022-10-28T04:07:51.569Z",
        updatedAt: "2022-10-28T04:07:51.569Z",
        __v: 0,
      },
      {
        _id: "635b55978ddf2bcf26beb0ef",
        owner: "631f6947298b00eccefeffd0",
        ownerName: "rohit",
        imgURL: "ROHIT",
        caption: "second story by rohit ",
        tagPeople: [],
        likes: [],
        viewer: [],
        DMY: "28/10/2022",
        HMS: "09/37/51",
        createdAt: "2022-10-28T04:07:51.569Z",
        updatedAt: "2022-10-28T04:07:51.569Z",
        __v: 0,
      },
      {
        _id: "635b55978ddf2bcf26beb0ef",
        owner: "631f6947298b00eccefeffd0",
        ownerName: "rohit",
        imgURL: "ROHIT",
        caption: "second story by rohit ",
        tagPeople: [],
        likes: [],
        viewer: [],
        DMY: "28/10/2022",
        HMS: "09/37/51",
        createdAt: "2022-10-28T04:07:51.569Z",
        updatedAt: "2022-10-28T04:07:51.569Z",
        __v: 0,
      },
    ],
  ],
};
const Del = () => {
  return (
    <>
      {/* {data.data.map((item) => {
        item.map((key) =>{
          return <h1>hii</h1>;
        });
      })} */}

      {data.data.map((user) =>
        user.map((item) => {
          return <Del1 username={item.ownerName} />;
        })
      )}
    </>
  );
};

export default Del;
