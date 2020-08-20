import React, {useState, useEffect} from 'react';
import axios from "../../axios";


const PointList =[];
   if (pointsData.length !== 0){    
        console.log("there is no data in pointList");
        pointsData.data.map(item => (
            PointList.push({
                key: '1',
                name: 'Camel Step',
                address: 'Riyadh - Prince Turki Ibn Abdulaziz Al Awwal St , Saudi Arabia.',
                mobile: '966509405710',
                map_link: 'https://www.google.com/maps/place/%D8%AE%D8%B7%D9%88%D8%A9+%D8%AC%D9%85%D9%84+%7C+Camel+Step%E2%80%AD/@24.7693689,46.6932745,17z/data=!4m12!1m6!3m5!1s0x3e2efd1bc666ad5f:0x69645b4c8631a3d0!2z2K7Yt9mI2Kkg2KzZhdmEIHwgQ2FtZWwgU3RlcA!8m2!3d24.7693689!4d46.6910858!3m4!1s0x3e2efd1bc666ad5f:0x69645b4c8631a3d0!8m2!3d24.7693689!4d46.6910858',
                on_hold: '18',
                released: '12',
                id:"camel-1"
            })
        ));
    }

const pointList = () => {
  const [pointsData, setPointsData] = useState({ data: [] });
  let isLoading = false;
  let isError = false;

  const config = {
      headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
      },
  };
  const getPointsOrders = () => {
      isError = false;

      axios
        .get("/V1/point/orders", config)
        .then((response) => {
          setPointsData(response.data);
          console.log("Report from Api",response.data)
        })
        .catch((error) => {
          console.log("AXIOS ERROR in getPointStatics: ", error);
          isError = true;
        })
        .finally(() => {
          isLoading = false;
        });
  };
  useEffect(() => {
      getPointsOrders();
    }, []);

};

//  const PointList = [
//     {   key: '1',
//         name: 'Camel Step',
//         address: 'Riyadh - Prince Turki Ibn Abdulaziz Al Awwal St , Saudi Arabia.',
//         mobile: '966509405710',
//         map_link: 'https://www.google.com/maps/place/%D8%AE%D8%B7%D9%88%D8%A9+%D8%AC%D9%85%D9%84+%7C+Camel+Step%E2%80%AD/@24.7693689,46.6932745,17z/data=!4m12!1m6!3m5!1s0x3e2efd1bc666ad5f:0x69645b4c8631a3d0!2z2K7Yt9mI2Kkg2KzZhdmEIHwgQ2FtZWwgU3RlcA!8m2!3d24.7693689!4d46.6910858!3m4!1s0x3e2efd1bc666ad5f:0x69645b4c8631a3d0!8m2!3d24.7693689!4d46.6910858',
//         on_hold: '18',
//         released: '12',
//         id:"camel-1"

//     },
//     {   key: '2',
//         name: 'Camel Step 2',
//         address: 'Riyadh - Prince Turki Ibn Abdulaziz Al Awwal St , Saudi Arabia.',
//         mobile: '966509405710',
//         map_link: 'https://www.google.com/maps/place/%D8%AE%D8%B7%D9%88%D8%A9+%D8%AC%D9%85%D9%84+%7C+Camel+Step%E2%80%AD/@24.7693689,46.6932745,17z/data=!4m12!1m6!3m5!1s0x3e2efd1bc666ad5f:0x69645b4c8631a3d0!2z2K7Yt9mI2Kkg2KzZhdmEIHwgQ2FtZWwgU3RlcA!8m2!3d24.7693689!4d46.6910858!3m4!1s0x3e2efd1bc666ad5f:0x69645b4c8631a3d0!8m2!3d24.7693689!4d46.6910858',
//         on_hold: '8',
//         released: '3',
//         id:"camel-2"
//     },
//     {   key: '3',
//         name: 'Camel Step 3',
//         address: 'Riyadh - Prince Turki Ibn Abdulaziz Al Awwal St , Saudi Arabia.',
//         mobile: '966509405710',
//         map_link: 'https://www.google.com/maps/place/%D8%AE%D8%B7%D9%88%D8%A9+%D8%AC%D9%85%D9%84+%7C+Camel+Step%E2%80%AD/@24.7693689,46.6932745,17z/data=!4m12!1m6!3m5!1s0x3e2efd1bc666ad5f:0x69645b4c8631a3d0!2z2K7Yt9mI2Kkg2KzZhdmEIHwgQ2FtZWwgU3RlcA!8m2!3d24.7693689!4d46.6910858!3m4!1s0x3e2efd1bc666ad5f:0x69645b4c8631a3d0!8m2!3d24.7693689!4d46.6910858',
//         on_hold: '8',
//         released: '3',
//         id:"camel-3"
//     }

//     ]
export default PointList;