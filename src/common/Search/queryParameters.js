// import { useLocation, useHistory } from "react-router-dom";

// export const useQueryParameter = (param) => {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search).get(param);

//   return query;
// };

// export const useReplaceQueryParameter = () => {
//   const location = useLocation();
//   const history = useHistory();

//   const replaceQueryParameter = ({ key, value }) => {
//     const searchParams = new URLSearchParams(location.search);

//     if (value === undefined) {
//       searchParams.delete(key);
//     } else {
//       searchParams.set(key, value);
//     }

//     const newSearch = searchParams.toString();

//     return history.push(`${location.pathname}?${newSearch}`);
//   };

//   return replaceQueryParameter;
// };
