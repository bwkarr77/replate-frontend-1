import axios from "axios";

export const baseUrl = "https://bw-replate.herokuapp.com/api";
export const businessRegister = `${baseUrl}/auth/business/register`;
export const businessLogin = `${baseUrl}/auth/business/login`;
export const volunteerRegister = `${baseUrl}/auth/volunteer/register`;
export const volunteerLogin = `${baseUrl}/auth/volunteer/login`;
export const foodUrl = `${baseUrl}/food`; // all food in database
export const foodId = `${foodUrl}/food/:id`;
//===  PUT, DELETE
export const businessFood = `${foodUrl}/business`;
export const volunteerFood = `${foodUrl}/volunteer`;
export const claimFood = `${foodUrl}/claim/:id`;

export const getBusinessFood = async () => {
  const result = await axios.get(foodUrl).then(({ data }) => data);
  return result;
};
